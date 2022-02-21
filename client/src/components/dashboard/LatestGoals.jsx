import { useState, useEffect } from "react";
import { Divider, Typography, Card, CardContent } from "@mui/material";
import GoalItem from "./GoalItem";
import TaskList from "../goals/TaskList";
import axios from "axios";
import "../goals/home.css";

function GoalList() {
  const [showTasks, setShowTasks] = useState(false);
  const [goalId, setGoalId] = useState(0);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/goals", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        // console.log("GOALS --->", result);
        const loadedGoals = result.data.splice(0, 3);
        setGoals(loadedGoals);
      });
  }, []);

  const getGoalId = (id) => {
    setShowTasks(true);
    setGoalId(id);
  };
  const exitTasks = () => {
    setShowTasks(false);
  };
  //parse the individual goals and return an component for each

  const parsedGoals = goals.map((goal) => {
    return (
      <div className='goal-card'>
        <GoalItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          status={goal.status}
          category={goal.category}
          getGoalId={getGoalId}
        />
      </div>
    );
  });

  return (
    <>
      {showTasks && (
        <div className='task-holder'>
          <TaskList exitTasks={exitTasks} goalId={goalId} />
        </div>
      )}
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
            Latest Goals:
          </Typography>
          <Divider />
          <Typography
            sx={{
              mb: 1.5,
              textAlign: "center",
            }}
            color='text.secondary'
          >
            <>
              {parsedGoals.length ? (
                <div className='goal-holder'>{parsedGoals}</div>
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                  color='#96a2bc'
                >
                  You have not set goals yet
                </Typography>
              )}
            </>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default GoalList;
