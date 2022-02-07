import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import GoalList from "./goals/GoalList";
import "./home.css";

function Home() {
  return (
    <>
      <Sidebar />
      <div className='dash'>
        <Header />
        <div className='goal-list'>
          <GoalList />
        </div>
      </div>
    </>
  );
}

export default Home;
