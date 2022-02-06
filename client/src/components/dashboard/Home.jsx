import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import GoalList from "./GoalList";
import "./home.css";

function Home() {
  return (
    <>
      <Sidebar />
      <div className='dash'>
        <Header />
        <GoalList />
      </div>
    </>
  );
}

export default Home;
