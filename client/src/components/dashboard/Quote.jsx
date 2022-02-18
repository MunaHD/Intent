import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Quote() {
  return (
    <Card sx={{ width: 600, height: "max-content", paddingTop: "2rem" }}>
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
