import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddJournal from "./AddJournal";
import "../home.css";
import axios from "axios";

export default function Header() {
  const [show, setShow] = useState(false);
  const [emotionUrls, setEmotionUrls] = useState({});
  const [goals, setGoals] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/emotions", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setEmotionUrls(res.data);
      });
  }, [show]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/goals", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setGoals(res.data);
      });
  }, [show]);

  //open the modal to add a journal
  const showAddJournal = () => {
    setShow(true);
    console.log("addJournal");
  };
  const exitAddJournal = () => {
    setShow(false);
    console.log("addJournal");
  };

  return (
    <>
      {show && (
        <AddJournal
          exitAddJournal={exitAddJournal}
          emotionUrls={emotionUrls}
          goals={goals}
        />
      )}
      <Card sx={{ minWidth: 275 }} className='header-holder'>
        <div className='card-content'>
          <CardContent className='progress-bar'>
            <h2>Hi Marian! 👋</h2>
            <p>Today is Monday February, 7th</p>
          </CardContent>
        </div>
      </Card>
      <AddCircleIcon className='plus-svg' onClick={showAddJournal} />
    </>
  );
}
