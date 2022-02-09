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
      {/* <div> */}
      {/* //icon8 */}
      {/* <a target='_blank' href='https://icons8.com'>
          Icons8
        </a>
      </div> */}
    </>
  );
}

export default Home;
