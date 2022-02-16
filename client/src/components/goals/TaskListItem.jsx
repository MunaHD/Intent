import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Typography } from "@mui/material";
import "./home.css";

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
  const { handleClose, id, details, isCompleted, completedTask } = props;
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
        <Typography>{details}</Typography>
      </div>
    </>
  );
};

export default TaskListItem;
