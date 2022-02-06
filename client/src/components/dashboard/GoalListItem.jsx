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
  const { id, name, status, category, deleteGoal, completeGoal, updateStatus } =
    props;
  const deleteHandler = () => {
    deleteGoal(id);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <div className='goal-card-content'>
        <Typography>{name}</Typography>
        <CardContent className='progress-bar'>
          <Circle
            completeGoal={completeGoal}
            status={status}
            id={id}
            updateStatus={updateStatus}
          />
        </CardContent>
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
          <Button size='large'></Button>
          <Button size='small' className='buttons'>
            <NotesIcon />
            {/* <Typography
              sx={({ mb: 0.5 }, { fontSize: 8 })}
              color='text.secondary'
            >
              Journal
            </Typography> */}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
