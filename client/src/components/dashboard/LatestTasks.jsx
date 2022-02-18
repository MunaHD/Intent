import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import "../goals/home.css";
import React from "react";
import { useEffect } from "react";

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
const TaskList = (props) => {
  const [completed, setCompleted] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);

  const goalId = 1;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/tasks", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setTasks(result.data);
        setCompleted(false);
        setAddTask(false);
      })
      .catch((err) => console.log(err));
  }, [addTask, completed]);

  const completedTask = (id) => {
    const data = id;
    const accessToken = localStorage.getItem("accessToken");
    axios
      .put(
        "http://localhost:3002/tasks/complete",
        { data },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => setCompleted(true))
      .catch((err) => console.log(err));
  };
  const addNewTask = () => {
    setAddTask(true);
  };
  const filteredTasks = tasks.filter(
    (task) => task.goal_id === goalId && task.iscompleted === false
  );
  const completedTasks = tasks.filter(
    (task) => task.goal_id === goalId && task.iscompleted === true
  );
  //   setFilteredTasks(filteredTasks);

  //parse the individual goals and return an component for each
  const parsedCompletedTasks = completedTasks.map((tasks) => {
    return <div className='completed-task-card'>{tasks.details}</div>;
  });
  const parsedTasks = filteredTasks.map((tasks) => {
    return (
      <div className='tasks-card'>
        <TaskItem
          key={tasks.id}
          id={tasks.id}
          details={tasks.details}
          completedTask={completedTask}
        />
        <Divider />
      </div>
    );
  });

  return (
    <Box sx={style} id='task-holder'>
      <div className='modal-list'>
        {parsedTasks.length ? (
          <div className='tasks'>{parsedTasks}</div>
        ) : (
          <div className='no-tasks'> New tasks will appear here </div>
        )}

        <Divider sx={{ background: "#96a2bc" }} />
        <div className='completed-task-label'>Completed Tasks</div>
        <Divider sx={{ background: "#96a2bc" }} />
        {parsedCompletedTasks.length ? (
          <div>{parsedCompletedTasks}</div>
        ) : (
          <div className='no-tasks-completed'>
            {" "}
            Completed tasks will apear here
          </div>
        )}
      </div>
    </Box>
  );
};

export default TaskList;
