import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Circle from "./Circle";
import "./home.css";

export default function Header(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <div className='card-content'>
        <CardContent className='progress-bar'>
          <Circle getProgress={props.getProgress} />
        </CardContent>
        <CardActions className='button-group'>
          <Button size='small'>Delete</Button>
          <Button size='small'>Journal</Button>
        </CardActions>
      </div>
    </Card>
  );
}
