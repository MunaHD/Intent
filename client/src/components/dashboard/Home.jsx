import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import GoalList from "./goals/GoalList";
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
        {/* <div> */}
        {/* //icon8 */}
        {/* <a target='_blank' href='https://icons8.com'>
          Icons8
        </a>
      </div> */}
      </div>
    </div>
  );
}

export default Home;
