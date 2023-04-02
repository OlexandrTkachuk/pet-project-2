// icons
import birthday from '../../images/gift.png';
import ad from '../../images/ad.png';

// data
import { friendList } from 'helpers/friendList';
import './style.css';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
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
      </div>
    </div>
  );
};

export default RightBar;
