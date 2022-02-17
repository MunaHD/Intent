import { useState, useEffect } from "react";
import JournalListItem from "./JournalListItem";
import GoalIcon from "./GoalIcons";
import { Stack, Button } from "@mui/material";
import axios from "axios";
import "../goals/home.css";
import "./journals.css";

function JournalList() {
  const [show, setShow] = useState({ state: false });
  const [journals, setJournals] = useState([]);
  const [filteredJournals, setFilteredJournals] = useState([]);
  const [goals, setGoals] = useState([]);

  const clickHandler = () => {
    setShow(false);
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    Promise.all([
      axios.get("http://localhost:3002/journals", {
        headers: { authorization: `Bearer ${accessToken}` },
      }),
      axios.get("http://localhost:3002/goals/names", {
        headers: { authorization: `Bearer ${accessToken}` },
      }),
    ]).then((all) => {
      const [first, second] = all;
      setJournals(first.data);
      setGoals(second.data);
    });
  }, []);

  const selectedGoal = (id) => {
    setShow((prev) => {
      return { ...prev, state: true };
    });
    setFilteredJournals(journals.filter((journal) => journal.goal_id === id));
  };

  const filteredJournalForGoal = filteredJournals.map((journal) => {
    return (
      <div className='journal-card'>
        <JournalListItem
          key={journal.id}
          id={journal.id}
          entry={journal.entry}
          date={journal.date}
          category={journal.category}
          goalName={journal.name}
          emotion={journal.choice}
        />
      </div>
    );
  });

  //parse the individual journals and return a component for each
  const parsedJournals = journals.map((journal) => {
    return (
      <div className='journal-card'>
        <JournalListItem
          key={journal.id}
          id={journal.id}
          entry={journal.entry}
          date={journal.date}
          category={journal.category}
          goalName={journal.name}
          emotion={journal.choice}
        />
      </div>
    );
  });
  const parsedGoals = goals.map((goal) => {
    return (
      <GoalIcon
        key={goal.id}
        id={goal.id}
        name={goal.name}
        selectedGoal={selectedGoal}
      />
    );
  });

  return (
    <>
      <div className='goal-button-holder'>
        <div className='button-holder'>
          <Button
            className='goal-button'
            variant='outlined'
            sx={{ background: "#dde6f1", color: "#33345b" }}
            onClick={clickHandler}
          >
            All
          </Button>
        </div>
        {parsedGoals}
      </div>
      {show.state
        ? [
            <>
              {filteredJournalForGoal.length ? (
                <div>{filteredJournalForGoal}</div>
              ) : (
                <div>There are no journals for this goal</div>
              )}
            </>,
          ]
        : [
            <>
              {parsedJournals.length ? (
                <div className='journal-holder'>{parsedJournals}</div>
              ) : (
                <div>There are no Journals</div>
              )}
            </>,
          ]}
    </>
  );
}

export default JournalList;
