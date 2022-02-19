import Sidebar from "../sidebar/Sidebar";
import Quote from "./Quote";
import LatestTasks from "./LatestTasks";
import LatestGoals from "./LatestGoals";
import "../goals/home.css";

function Home() {
  return (
    <div className='dash-holder'>
      <div id='dash-side-bar'>
        <Sidebar />
      </div>

      <div className='dash'>
        <div className='quote-card-holder'>
          <Quote />
        </div>
        <div className='task-badge-holder'>
          <LatestTasks />
          <LatestGoals />
        </div>
      </div>
    </div>
  );
}

export default Home;
