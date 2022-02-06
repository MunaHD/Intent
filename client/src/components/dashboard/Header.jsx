import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import "./home.css";

export default function Header() {
  return (
    <Card sx={{ minWidth: 275 }} className='header-holder'>
      <div className='card-content'>
        <CardContent className='progress-bar'>
          <h2>Hi Marian! 👋</h2>
          <p>Today is Monday February, 7th</p>
        </CardContent>
      </div>
    </Card>
  );
}
