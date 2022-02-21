import { useState } from "react";
import axios from "axios";
import { Divider, Typography, Card, CardContent } from "@mui/material";
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/tasks/new", {
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
  const parsedTasks = tasks.map((tasks) => {
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
    <>
      <Card
        sx={{
          width: "55%",
          height: "100%",
          marginTop: "1rem",
          marginLeft: "1.2rem",
          borderRadius: "15px",
          overflow: "scroll",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
            color='#96a2bc'
          >
            This weeks Tasks
          </Typography>
          <Divider />
          <Typography
            sx={{
              mb: 1.5,
              textAlign: "center",
            }}
            color='text.secondary'
          >
            {parsedTasks.length ? (
              <div className='tasks'>{parsedTasks}</div>
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "3rem",
                }}
                color='#96a2bc'
              >
                There are no tasks to complete.
                <br /> Add a new task directly to each goal.
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskList;
