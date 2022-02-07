import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

import "./journals.css";

export default function JournalListItem(props) {
  const { id, entry, date, category } = props;
  return (
    <div>
      <Card
        sx={{ minWidth: 275 }}
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
        <div className='journal-card-content'>
          <CardContent>
            <Typography
              sx={({ mb: 0.5 }, { fontSize: 8 })}
              color='text.secondary'
              className='journal-date'
            >
              {moment(date).format("dddd, MMMM Do YYYY")}
            </Typography>
            <Typography className='journal-entry'>{entry}</Typography>
            <Typography
              sx={({ mb: 0.5 }, { fontSize: 8 })}
              color='text.secondary'
              className='journal-category'
            >
              {category}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
