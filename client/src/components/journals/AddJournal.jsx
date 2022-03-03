import { useState, useEffect } from "react";
import { Modal, Button, Box } from "@mui/material";
import axios from "axios";
import "./journals.css";

export default function AddJournal(props) {
  //pass functions that handles the state of the modal
  const { exitAddJournal, emotionUrls, goals } = props;
  const [journalData, setJournalData] = useState({
    goalId: 1,
    choice: "",
    entry: "",
  });
  const [error, setError] = useState(false);

  // close the modal
  const handleClose = () => exitAddJournal();

  //get the data for the journal
  const submitHandler = (e) => {
    // if (Object.values(journalData).some((x) => x === "")) {
    //   e.preventDefault();
    //   setError(true);
    //   return;
    // }
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3002/journals",
        { journalData },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
  };
  //change the value of the entry as user types
  const changeEntryHandler = (e) => {
    setJournalData((prev) => {
      return { ...prev, entry: e.target.value };
    });
  };
  // change the value of the goal when the user chooses from list
  const changeGoalHandler = (e) => {
    setJournalData((prev) => {
      return { ...prev, goalId: e.target.value };
    });
  };

  //change the emotion once clicked and make it shaded
  const handleEmotionInput = (e) => {
    // setError(false);
    setJournalData((prev) => {
      return { ...prev, choice: e.target.value ? e.target.value : e.target.id };
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
          id='modal-journal-show'
        >
          <form className='journal-form' onSubmit={submitHandler}>
            {/* goal list */}
            <label className='journal-form-label'>
              <h3>Which goal would you like to journal about?</h3>
            </label>
            <div className='form-sections'>
              <select id='goal' onChange={changeGoalHandler} required>
                <option disabled selected value=''>
                  {""}- select an option -{""}
                </option>
                {goals.map((item) => {
                  const { name, id } = item;
                  // let imageText = `${image}`;
                  return <option value={id}>{name}</option>;
                })}
              </select>

              {/* entry */}
              <label className='journal-form-label'>
                <h3>How do you feel?</h3>
              </label>

              <textarea
                name='entry'
                placeholder='I feel...'
                className='journal-entry'
                // value={journalData.entry}
                onChange={changeEntryHandler}
                autocomplete='off'
                required
              />
            </div>
            {/* emotions */}
            <label className='journal-form-label'>
              <h3>Choose an emotion</h3>
            </label>
            <div className='add-journal-icon-group'>
              {emotionUrls.map((item) => {
                const { image } = item;
                return (
                  <button
                    value={image}
                    type='button'
                    className={`add-journal-button ${
                      journalData.choice === image ? "selected" : null
                    } `}
                    onClick={handleEmotionInput}
                  >
                    <img
                      id={image}
                      alt='{image}'
                      src={require("./icons/" + image)}
                      className='add-journal-icon'
                    />
                    {image.slice(0, -4)}
                  </button>
                );
              })}
            </div>
            <div className='flex-container'>
              <Button
                id='create-journal-button'
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
            {/* {error && <p>Please choose an emotion</p>} */}
          </form>
        </Box>
      </Modal>
    </>
  );
}
