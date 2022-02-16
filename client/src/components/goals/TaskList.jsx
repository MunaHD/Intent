import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Typography } from "@mui/material";
import TaskListItem from "./TaskListItem";
import "./home.css";
import React from "react";

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
  const { exitTasks, filteredTasks } = props;
  const [completed, setCompleted] = useState(false);

  console.log("TASK LIST filteredtasks", filteredTasks);
  const handleClose = () => {
    return exitTasks();
  };

  const completedTask = (id) => {
    const data = id;
    // console.log("DATA -id-status", data);
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3002/tasks/delete",
        { data },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
  };
  //parse the individual goals and return an component for each
  const parsedTasks = filteredTasks.map((tasks) => {
    return (
      <div className='tasks-card'>
        <TaskListItem
          key={tasks.id}
          id={tasks.id}
          details={tasks.details}
          isCompleted={tasks.isCompleted}
          handleClose={handleClose}
        />
        <Divider />
      </div>
    );
  });

  return (
    <section className='modal'>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} id='task-holder'>
          <div className='modal-list'>
            <div>{parsedTasks}</div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default TaskList;
