import { useState, useEffect } from "react";
import { Modal, Button, Box, Divider } from "@mui/material";
import axios from "axios";
import "../journals/journals.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTask(props) {
  const { goalId, addNewTask } = props;
  const [date, setDate] = useState(new Date());
  const [taskData, setTaskData] = useState({
    goal_id: goalId,
    details: "",
    date,
  });

  console.log("STATE DATE", taskData.date);

  //get the data for the journal
  const submitHandler = (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3002/tasks",
        { taskData },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        addNewTask();
      })
      .catch((err) => console.log(err));
  };
  //change the value of the entry as user types
  const changeEntryHandler = (e) => {
    setTaskData((prev) => {
      return { ...prev, details: e.target.value };
    });
  };
  //change the value of the date as user chooses
  const changeDateHandler = (date) => {
    setTaskData((prev) => {
      return { ...prev, date: date };
    });
    setDate(date);
  };

  return (
    <>
      <form className='task-form' onSubmit={submitHandler}>
        {/* entry */}
        <div className='task-form-sections'>
          <textarea
            name='entry'
            placeholder='I need to...'
            className='task-entry'
            onChange={changeEntryHandler}
            autocomplete='off'
            required
          />
          <Divider
            orientation='vertical'
            style={{
              height: "1.5rem",
              width: "1px",
            }}
          />
        </div>
        <div className='date'>
          <DatePicker
            selected={date}
            onChange={(date) => changeDateHandler(date)}
          />
          <Divider
            orientation='horizontal'
            style={{
              background: " #96a2bc",
              width: "100%",
              position: "relative",
            }}
          />
        </div>
        <div className='flex-container'>
          <Button
            id='create-task-button'
            variant='contained'
            color='primary'
            type='submit'
            style={{
              marginTop: "1rem",
            }}
          >
            Add task
          </Button>
        </div>
      </form>
    </>
  );
}
