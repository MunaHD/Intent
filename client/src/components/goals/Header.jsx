import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddGoal from "./AddGoal";
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
      <div className='header-holder'>
        <Card sx={{ minWidth: 275 }} className='header'>
          <div className='header-content'>
            <h2>Hi Marian! 👋</h2>
            <p>Today is Monday February, 7th</p>
          </div>
        </Card>
        <AddCircleIcon className='plus-svg' onClick={showAddGoal} />
      </div>
    </>
  );
}
