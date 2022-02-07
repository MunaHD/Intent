import { useState, useEffect } from "react";
import JournalListItem from "./JournalListItem";
import Success from "../success";
import axios from "axios";
import "../home.css";

function GoalList() {
  const [completed, setCompleted] = useState(false);
  const [goals, setGoals] = useState([]);
  const [deletedGoal, setDeletedGoal] = useState(false);

  useEffect(() => {
    // let email = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/goals", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setGoals(result.data);
        setDeletedGoal(false);
      });
  }, [completed, deletedGoal]);

  const deleteGoal = (id) => {
    //post request to delete the goal
    const accessToken = localStorage.getItem("accessToken");
    axios
      .delete(`http://localhost:3002/goals/delete/${id}`, {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setGoals(result.data);
      });
    setDeletedGoal(!deletedGoal);
  };

  const completeGoal = (id) => {
    //post request to delete the goal
    const accessToken = localStorage.getItem("accessToken");
    axios
      .delete(`http://localhost:3002/goals/delete/${id}`, {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setGoals(result.data);
      });
    //call modal by changing the state to complete
    setCompleted(true);
  };

  //update the status of the goal
  const updateStatus = (id, status) => {
    const data = { id, status };
    console.log("DATA -id-status", data);
    const accessToken = localStorage.getItem("accessToken");
    axios
      .put(
        "http://localhost:3002/goals",
        { data },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
  };

  //exit the open modal for succ info
  const exitShow = () => {
    setCompleted(false);
  };

  //parse the individual goals and return an component for each
  const parsedGoals = goals.map((goal) => {
    return (
      <div className='goal-card'>
        <JournalListItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          status={goal.status}
          category={goal.category}
          deleteGoal={deleteGoal}
          completeGoal={completeGoal}
          updateStatus={updateStatus}
        />
      </div>
    );
  });

  return (
    <>
      {completed && !deletedGoal ? (
        <>
          <Success exitShow={exitShow} />
          <div className='goal-holder'>{parsedGoals}</div>
        </>
      ) : (
        [
          <>
            {parsedGoals.length ? (
              <div className='goal-holder'>{parsedGoals}</div>
            ) : (
              <div>There are no goals</div>
            )}
          </>,
        ]
      )}
    </>
  );
}

export default GoalList;
