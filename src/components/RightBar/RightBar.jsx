// icons
import birthday from '../../images/gift.png';
import ad from '../../images/ad.png';

// data
import { friendList } from 'helpers/friendList';
import './style.css';

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={birthday} alt="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightBarAd" src={ad} alt="rightBarAdd" />
        <h4 className="rightBarTitle">Online Frineds</h4>

        <ul className="rightBarFriendList">
          {friendList.map(({ id, username, avatar }) => {
            return (
              <li className="rightBarFriend" key={id}>
                <div className="rightBarProfileImgContainer">
                  <img
                    className="rightBarProfileImg"
                    src={avatar}
                    alt="persone3"
                  />
                  <span className="rightBarOnline"></span>
                </div>
                <span className="rightBarUsername">{username}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User information</h4>
        <ul className="rightBarInfo">
          <li className="rightBarInfoItem">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">New York</span>
          </li>

          <li className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Madrid</span>
          </li>

          <li className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue">Single</span>
          </li>
        </ul>

        <h4
          className="rightBarTitle rightBarTitleCenter"
          style={{ marginTop: '40px' }}
        >
          User friends
        </h4>
        <ul className="rightBarFollowings">
          {friendList.map(({ id, avatar, username }) => {
            return (
              <li className="rightBarFollowing" key={id}>
                <img
                  src={avatar}
                  alt={username}
                  className="rightBarFollowingImg"
                />
                <span className="rightBarFollowingName">{username}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
