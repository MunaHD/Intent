import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "../home.css";

function CircularProgressWithLabel(props) {
  console.log(props);
  return (
    <>
      <Box
        sx={{ position: "relative", display: "inline-flex" }}
        onClick={() => {
          props.clickHandler();
        }}
      >
        <CircularProgress
          variant='determinate'
          {...props}
          // sx={{
          //   width: 100,
          //   height: 100,
          // }}
        />
        <CircleOutlinedIcon id='circle' />
        <Box
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
    </>
  );
}

export default function Circle(props) {
  const { status, completeGoal, updateStatus } = props;
  const [progress, setProgress] = useState(status);

  const clickHandler = () => {
    if (progress === 80) {
      completeGoal(props.id);
    }
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : prevProgress + 20
    );
    updateStatus(props.id, progress + 20);
  };

  return (
    <CircularProgressWithLabel value={progress} clickHandler={clickHandler} />
  );
}
