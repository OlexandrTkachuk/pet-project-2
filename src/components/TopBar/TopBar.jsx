// navigation
import { Link } from 'react-router-dom';

// icons
import { FaSearch } from 'react-icons/fa';
import { BsFillPersonFill, BsFillChatDotsFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';

// images
import profileImage from '../../images/person/1.jpeg';

// styles
import './style.css';

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Aki Temmui social</span>
        </Link>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>

        <div className="topBarIcons">
          <div className="topBarIconItem">
            <BsFillPersonFill size={26} />
            <span className="topBarIconBadge">1</span>
          </div>

          <div className="topBarIconItem">
            <BsFillChatDotsFill size={22} />
            <span className="topBarIconBadge">2</span>
          </div>

          <div className="topBarIconItem">
            <IoIosNotifications size={28} />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>

        <Link to="/profile/:username">
          <img src={profileImage} alt="" className="topBarImg" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
