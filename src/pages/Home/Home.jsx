// components
import Feed from 'components/Feed/Feed';
import RightBar from 'components/RightBar/RightBar';
import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';

// styles
import './style.css';

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
