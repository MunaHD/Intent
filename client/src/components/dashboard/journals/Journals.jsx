import Header from "../Header";
import Sidebar from "../../sidebar/Sidebar";
import JournalList from "./JournalList";
import "../home.css";

function Journals() {
  return (
    <>
      <Sidebar />
      <div className='dash'>
        <div className='goal-list'>
          <JournalList />
        </div>
      </div>
    </>
  );
}

export default Journals;
