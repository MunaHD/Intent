import { useState, useEffect } from "react";
import JournalListItem from "./JournalListItem";
import Success from "../success";
import axios from "axios";
import "../home.css";

function GoalList() {
  const [show, setShow] = useState(false);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/journals", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setJournals(result.data);
      });
  }, []);

  //exit the open modal for succ info
  const exitShow = () => {
    setShow(false);
  };

  //parse the individual goals and return an component for each
  const parsedJournals = journals.map((journal) => {
    return (
      <div className='journal-card'>
        <JournalListItem
          key={journal.id}
          id={journal.id}
          entry={journal.entry}
          date={journal.date}
          category={journal.category}
        />
      </div>
    );
  });

  return (
    <>
      {show ? (
        <>
          <Success exitShow={exitShow} />
          <div className='goal-holder'>{parsedJournals}</div>
        </>
      ) : (
        [
          <>
            {parsedJournals.length ? (
              <div className='journal-holder'>{parsedJournals}</div>
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
