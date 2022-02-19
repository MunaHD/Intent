import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NotesIcon from "@mui/icons-material/Notes";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Circle from "../goals/Circle";
import "../goals/home.css";

export default function GoalListItem(props) {
  const {
    id,
    name,
    status,
    category,
    deleteGoal,
    completeGoal,
    updateStatus,
    getGoalId,
  } = props;

  // console.log("GOALLISTITEM GOALID", id);
  const deleteHandler = () => {
    deleteGoal(id);
  };

  const taskHandler = () => {
    getGoalId(id);
  };

  return (
    <div
      className={` goal-card-holder ${
        category === "Speed"
          ? category
          : category === "Flexibility"
          ? category
          : category === "Strength"
          ? category
          : category === "Endurance"
          ? category
          : "Cardio"
      } `}
    >
      <Card
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className='goal-card-content'>
          <CardContent
            className={`${
              category === "Speed"
                ? category
                : category === "Flexibility"
                ? category
                : category === "Strength"
                ? category
                : category === "Endurance"
                ? category
                : "Cardio"
            } `}
          >
            <Circle
              completeGoal={completeGoal}
              status={status}
              id={id}
              updateStatus={updateStatus}
              category={category}
            />
          </CardContent>
          <div className='goal-info'>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                marginLeft: "1rem",
              }}
              color='#667187'
            >
              {name.toUpperCase()}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.5rem",
                textAlign: "center",
                marginLeft: "1rem",
              }}
              color='#939393'
            >
              {category}
            </Typography>
          </div>
        </div>
        <div className='action-card'>
          <CardActions
            sx={{
              background: "#f7faff",
              display: "flex",
              flexDirection: "column",
              alignContent: "start",
              width: "2rem",
              height: "90%",
              margin: "0rem",
              marginLeft: "1rem",
            }}
            className={` ${
              category === "Speed"
                ? category
                : category === "Flexibility"
                ? category
                : category === "Strength"
                ? category
                : category === "Endurance"
                ? category
                : "Cardio"
            } `}
          >
            <Button
              size='small'
              onClick={taskHandler}
              className='notes-icon buttons'
            >
              <Typography
                sx={{
                  fontSize: "0.5rem",
                  textAlign: "center",
                }}
              >
                TASKS
              </Typography>
              <NotesIcon />
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
