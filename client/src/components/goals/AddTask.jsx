import { useState, useEffect } from "react";
import { Modal, Button, Box } from "@mui/material";
import axios from "axios";
import "../journals/journals.css";

export default function AddTask(props) {
  const { goalId } = props;
  //pass functions that handles the state of the modal
  const [taskData, setTaskData] = useState({
    goal_id: goalId,
    details: "",
  });

  const [error, setError] = useState(false);
  // close the modal

  //get the data for the journal
  const submitHandler = (e) => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3002/tasks",
        { taskData },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
  };
  //change the value of the entry as user types
  const changeEntryHandler = (e) => {
    setTaskData((prev) => {
      return { ...prev, details: e.target.value };
    });
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
        </div>
        {error && <p>Please choose an emotion</p>}
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
