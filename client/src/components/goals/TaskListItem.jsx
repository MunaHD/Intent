import { Typography, Chip } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import Avatar from "@mui/material/Avatar";
import moment from "moment";
import "./home.css";

const TaskListItem = (props) => {
  const { id, details, completedTask, date, created } = props;
  const taskDate = new Date(created);
  console.log("CREATED ON ---->", taskDate);
  const clickHandler = () => {
    completedTask(id);
  };

  //parse the individual goals and return an component for each
  return (
    <>
      <div className='task'>
        <input
          type='checkbox'
          className='task-checkbox'
          onClick={clickHandler}
        />
        <div className='task-details-holder'>
          <Typography
            sx={{
              width: "100%",
            }}
          >
            {details}
          </Typography>
          <Chip
            label={`${moment(date).fromNow()}`}
            variant='outlined'
            sx={{ width: "7rem", color: "#999a9b" }}
          />
        </div>
      </div>
    </>
  );
};

export default TaskListItem;
