import { Button } from "@mui/material";

const TaskListItem = (props) => {
  const { id, name, selectedGoal } = props;
  const clickHandler = () => {
    selectedGoal(id);
  };
  //parse the individual goals and return an component for each
  return (
    <div className='button-holder'>
      <Button
        className='goal-button'
        variant='outlined'
        sx={{ background: "#dde6f1", color: "#33345b" }}
        onClick={clickHandler}
      >
        {name}
      </Button>
    </div>
  );
};

export default TaskListItem;
