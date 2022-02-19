import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function Quote() {
  return (
    <Card
      sx={{
        width: "70%",
        height: "20vh",
        // paddingTop: "2rem",
        borderRadius: "15px",
        background: "#d9f5df",
        boxShadow: "5px 5px 0px 2px #f7faff",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            mb: 1.5,
            textAlign: "center",
          }}
          color='text.secondary'
        >
          It's a wonderful day to chase your dreams!
        </Typography>
      </CardContent>
    </Card>
  );
}
