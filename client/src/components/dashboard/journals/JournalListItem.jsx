import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NotesIcon from "@mui/icons-material/Notes";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "../home.css";

export default function Header(props) {
  const { id, name, status, category, deleteGoal, completeGoal, updateStatus } =
    props;
  const deleteHandler = () => {
    deleteGoal(id);
  };

  return (
    <div
      className={`goal-card ${
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
      <Card sx={{ minWidth: 275 }}>
        <div className='goal-card-content'>
          <Typography>{name}</Typography>
          <CardContent
            id='progress-bar'
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
          ></CardContent>
          <CardActions className='button-group'>
            <Button size='small' onClick={deleteHandler} className='buttons'>
              <DeleteForeverIcon style={{ fill: "red" }} />
              {/* <Typography
              sx={({ mb: 0.5 }, { fontSize: 8 })}
              color='text.secondary'
            >
              DELETE
            </Typography> */}
            </Button>
            <Typography
              sx={({ mb: 0.5 }, { fontSize: 8 })}
              color='text.secondary'
            >
              {category}
            </Typography>
            <Button size='small' className='buttons'>
              <NotesIcon />
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
