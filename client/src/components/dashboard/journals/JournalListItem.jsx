import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

import "./journals.css";

export default function JournalListItem(props) {
  const { id, entry, date, category, goalName, emotion } = props;
  return (
    <div
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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className='journal-card-content'>
            <div className='journal-goal-holder'>
              <div
                className={`goal-name ${
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
                {goalName}
              </div>
              <div
                className={`journal-emotion ${
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
                <img
                  alt='anxiety'
                  src={require("./icons/" + emotion)}
                  className='icon'
                />
              </div>
            </div>
            <div className='journal-info'>
              <Typography
                sx={({ mb: 0.5 }, { fontSize: 8 })}
                color='text.secondary'
                className='journal-date'
              >
                {moment(date).format("dddd, MMMM Do YYYY")}
              </Typography>
              <p className='journal-entry'> {entry} </p>
            </div>
            <div className='icon-group'>
              {/* <img
                alt='anxiety'
                src={require("./icons/sleepy.png")}
                className='icon'
              /> */}
            </div>
          </div>
        </CardContent>
        {/* </div> */}
      </Card>
    </div>
  );
}
