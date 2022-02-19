import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import "../goals/home.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const TaskListItem = (props) => {
  const { id, details, completedTask } = props;
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
        <Typography
          sx={{
            mb: 1.5,
            textAlign: "start",
          }}
        >
          {details}
        </Typography>
      </div>
    </>
  );
};

export default TaskListItem;
