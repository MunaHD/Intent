import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NotesIcon from "@mui/icons-material/Notes";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Circle from "./Circle";
import "./home.css";

export default function Header(props) {
  const { id, name, status, iscomplete, deleteGoal, completeGoal } = props;

  const clickHandler = () => {
    deleteGoal(id);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <div className='goal-card-content'>
        <Typography>{name}</Typography>
        <CardContent className='progress-bar'>
          <Circle completeGoal={completeGoal} status={status} id={id} />
        </CardContent>
        <CardActions className='button-group'>
          <Button size='small' onClick={clickHandler}>
            <DeleteForeverIcon style={{ fill: "red" }} />
          </Button>
          <Button size='small'>
            <NotesIcon />
            <Typography></Typography>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
