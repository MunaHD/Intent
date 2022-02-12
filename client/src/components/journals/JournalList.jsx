import { useState, useEffect } from "react";
import JournalListItem from "./JournalListItem";
import Success from "../goals/success";
import axios from "axios";
import "../goals/home.css";

function GoalList() {
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

  return (
    <>
      {parsedJournals.length ? (
        <div className='journal-holder'>{parsedJournals}</div>
      ) : (
        <div>There are no Journals</div>
      )}
    </>
  );
}

export default GoalList;
