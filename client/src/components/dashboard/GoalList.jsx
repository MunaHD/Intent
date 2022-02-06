import { useState } from "react";
import GoalListItem from "./GoalListItem";
import Success from "./success";

function GoalList() {
  const [completed, setCompleted] = useState(false);
  //pass the funtion down to circle
  //to call when the progress bar reaches 100
  const getProgress = () => {
    //post request to delete the goal
    //call modal by changing the state to complete
    setCompleted(true);
  };
  const exitShow = () => {
    setCompleted(false);
  };

  return (
    <>
      {completed ? (
        <Success exitShow={exitShow} />
      ) : (
        <GoalListItem getProgress={getProgress} />
      )}
    </>
  );
}

export default GoalList;
