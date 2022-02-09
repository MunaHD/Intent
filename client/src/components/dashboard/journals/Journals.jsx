import Header from "./HeaderJournal";
import Sidebar from "../../sidebar/Sidebar";
import JournalList from "./JournalList";
import "../home.css";

function Journals() {
  return (
    <>
      <Sidebar />
      <div className='dash'>
        <Header />
        <div className='journal-list'>
          <JournalList />
        </div>
      </div>
    </>
  );
}

export default Journals;
