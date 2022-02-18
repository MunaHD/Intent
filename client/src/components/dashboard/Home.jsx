import Sidebar from "../sidebar/Sidebar";
import Quote from "./Quote";
import LatestTasks from "./LatestTasks";
import "../goals/home.css";

function Home() {
  return (
    <div className='dash-holder'>
      <div id='dash-side-bar'>
        <Sidebar />
      </div>

      <div className='dash'>
        <div className='quote-card'>
          <Quote />
        </div>
        <LatestTasks />
      </div>
    </div>
  );
}

export default Home;
