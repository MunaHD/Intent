import Header from "./HeaderJournal";
import Sidebar from "../sidebar/Sidebar";
import JournalList from "./JournalList";
import "./journals.css";

function Journals() {
  return (
    <>
      <div id='dash-side-bar'>
        <Sidebar />
      </div>
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
