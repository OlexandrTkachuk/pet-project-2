// components
import TopBar from 'components/TopBar/TopBar';
import SideBar from 'components/SideBar/SideBar';
import Feed from 'components/Feed/Feed';
import RightBar from 'components/RightBar/RightBar';

// styles
import './style.css';

// images
import post3 from '../../images/post/3.jpeg';
import person3 from '../../images/person/3.jpeg';

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={post3}
                alt="profileCoverImg"
              />
              <img
                className="profileUserImg"
                src={person3}
                alt="profileUserImg"
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Aki Temmui</h4>
              <span className="profileInfoDesc">Hello my dear friends</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
