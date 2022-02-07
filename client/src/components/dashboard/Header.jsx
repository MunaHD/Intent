import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddGoal from "./goals/AddGoal";
import "./home.css";

export default function Header() {
  const [show, setShow] = useState(false);
  //open the modal to add a journal
  const showAddGoal = () => {
    setShow(true);
    console.log("addGoal");
  };
  const exitAddGoal = () => {
    setShow(false);
    console.log("addGoal");
  };

  return (
    <>
      {show && <AddGoal exitAddGoal={exitAddGoal} />}
      <Card sx={{ minWidth: 275 }} className='header-holder'>
        <div className='card-content'>
          <CardContent className='progress-bar'>
            <h2>Hi Marian! 👋</h2>
            <p>Today is Monday February, 7th</p>
          </CardContent>
        </div>
      </Card>
      <AddCircleIcon className='plus-svg' onClick={showAddGoal} />
    </>
  );
}
