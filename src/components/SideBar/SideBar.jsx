// icons
import {
  MdRssFeed,
  MdOutlineVideoLibrary,
  MdGroups,
  MdWorkOutline,
} from 'react-icons/md';
import {
  BsFillChatSquareTextFill,
  BsFillBookmarkStarFill,
  BsFillQuestionSquareFill,
  BsCalendarEvent,
} from 'react-icons/bs';
import { GiPointyHat } from 'react-icons/gi';

// styles
import './style.css';
import { friendList } from 'helpers/friendList';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <MdRssFeed className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Feed</span>
          </li>

          <li className="sideBarListItem">
            <BsFillChatSquareTextFill className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Chats</span>
          </li>

          <li className="sideBarListItem">
            <MdOutlineVideoLibrary className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Videos</span>
          </li>

          <li className="sideBarListItem">
            <MdGroups className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Groups</span>
          </li>

          <li className="sideBarListItem">
            <BsFillBookmarkStarFill className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>

          <li className="sideBarListItem">
            <BsFillQuestionSquareFill className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Questions</span>
          </li>

          <li className="sideBarListItem">
            <MdWorkOutline className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Jobs</span>
          </li>

          <li className="sideBarListItem">
            <BsCalendarEvent className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Events</span>
          </li>

          <li className="sideBarListItem">
            <GiPointyHat className="sideBarIcon" size={20} />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sideBarButton" type="button">
          Show more
        </button>

        <hr className="sideBarHr" />

        <ul className="sideBarFriendList">
          {friendList.map(({ id, avatar, username, alt }) => {
            return (
              <li className="sideBarFriend" key={id}>
                <img src={avatar} alt={alt} className="sideBarFriendImg" />
                <span className="sideBarFriendName">{username}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
