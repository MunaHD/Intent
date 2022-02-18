import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import GoalList from "./GoalList";
import "./home.css";

function Home() {
  return (
    <div className='dash-holder'>
      <div id='dash-side-bar'>
        <Sidebar />
      </div>

      <div className='dash'>
        <Header />
        <div className='goal-list'>
          <GoalList />
        </div>
      </div>
    </div>
  );
}

export default Home;
