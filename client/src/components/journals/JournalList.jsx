import { useState, useEffect } from "react";
import JournalListItem from "./JournalListItem";
import { Button, Tabs, Tab } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import "../goals/home.css";
import "./journals.css";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7d8caa",
      main: "#7d8caa",
      dark: "#7d8caa",
      contrastText: "#fff",
    },
  },
});
function JournalList() {
  const [show, setShow] = useState({ state: false });
  const [journals, setJournals] = useState([]);
  const [filteredJournals, setFilteredJournals] = useState([]);
  const [goals, setGoals] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Tab
        label={goal.name}
        value={goal.id}
        onClick={() => selectedGoal(goal.id)}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
        textColor='secondary'
        indicatorColor='secondary'
      >
        <Tab label='ALL' value='ALL' onClick={clickHandler} />
        {parsedGoals}
      </Tabs>
      {show.state
        ? [
            <>
              {filteredJournalForGoal.length ? (
                <div>{filteredJournalForGoal}</div>
              ) : (
                <div className='no-journals'>
                  There are no journals for this goal
                </div>
              )}
            </>,
          ]
        : [
            <>
              {parsedJournals.length ? (
                <div className='journal-holder'>{parsedJournals}</div>
              ) : (
                <div className='no-journals'>There are no Journals</div>
              )}
            </>,
          ]}
    </ThemeProvider>
  );
}

export default JournalList;
