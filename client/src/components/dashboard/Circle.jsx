import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./home.css";
import { getLinearProgressUtilityClass } from "@mui/material";
import { red } from "@mui/material/colors";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant='determinate'
        {...props}
        // sx={{
        //   width: 100,
        //   height: 100,
        // }}
      />
      <Box
        onClick={() => {
          props.clickHandler();
        }}
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='caption'
          component='div'
          color='text.secondary'
          className='text-cursor'
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Circle(props) {
  const [progress, setProgress] = useState(0);

  const clickHandler = () => {
    if (progress === 80) {
      props.getProgress();
    }
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : prevProgress + 20
    );
  };

  return (
    <CircularProgressWithLabel value={progress} clickHandler={clickHandler} />
  );
}