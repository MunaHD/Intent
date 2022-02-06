import { useState } from "react";
import { Modal, Button, Typography, Box } from "@mui/material";

import "./home.css";
import { useEffect } from "react";

export default function AddGoal(props) {
  //pass functions that handles the state of the modal
  const { exitAddGoal, getGoalData } = props;
  const [goalData, setGoalData] = useState({ name: "", category: "" });

  // close the modal
  const handleClose = () => exitAddGoal();

  //get the data for the goal
  const submitHandler = (e) => {
    // getGoalData(goalData);
    console.log("GOALDATA", goalData);
  };
  //change the value of the name as user types
  const changeNameHandler = (e) => {
    setGoalData((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const changeCategoryHandler = (e) => {
    setGoalData((prev) => {
      return { ...prev, category: e.target.value };
    });
  };

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
          id='modal-goal-show'
        >
          <form className='goal-form' onSubmit={submitHandler}>
            <label className='form-label'>
              <h2>What's Your Goal?</h2>
            </label>
            <div className='form-sections'>
              <input
                id='name'
                name='name'
                placeholder='Name of the goal...'
                className='goal-name'
                value={goalData.name}
                onChange={changeNameHandler}
                autocomplete='off'
                required
              />
            </div>
            <label className='form-label'>
              <h2>Which Category?</h2>
            </label>
            <div className='form-sections'>
              <select id='category' onChange={changeCategoryHandler} required>
                <option disabled selected value=''>
                  {""}
                  -- select an option --{""}
                </option>
                <option value='1'>Strength</option>
                <option value='2'>Cardio</option>
                <option value='3'>Flexibility</option>
                <option value='4'>Endurance</option>
                <option value='5'>Speed</option>
                <option value='6'>Diet</option>
                <option value='7'>Nutrition</option>
              </select>
            </div>
            <div className='flex-container'>
              <Button
                id='create-goal-button'
                variant='contained'
                color='primary'
                type='submit'
                style={{
                  marginTop: "1rem",
                }}
              >
                Complete
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
