import { useState, useEffect } from "react";
import { Divider, Typography, Card, CardContent } from "@mui/material";
import GoalItem from "./GoalItem";
import axios from "axios";
import "../goals/home.css";

function GoalList() {
  const [goals, setGoals] = useState([]);
  console.log("goals", goals);
  useEffect(() => {
    // let email = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/goals", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setGoals(result.data);
      });
  }, []); //parse the individual goals and return an component for each

  const parsedGoals = goals.map((goal) => {
    return (
      <div className='goal-card'>
        <GoalItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          status={goal.status}
          category={goal.category}
        />
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
                <div className='no-goal-list'>There are no goals</div>
              )}
            </>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default GoalList;
