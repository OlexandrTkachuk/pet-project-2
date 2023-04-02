import './style.css';
import persone1 from '../../images/person/1.jpeg';

//icons
import {
  MdPermMedia,
  MdLabel,
  MdLocationOn,
  MdEmojiEmotions,
} from 'react-icons/md';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={persone1} alt="persone1" className="shareProfileImg" />
          <input
            placeholder="What's is your mind, Aki?"
            type="text"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia className="shareIcon" color="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
              <MdLabel className="shareIcon" color="blue" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <MdLocationOn className="shareIcon" color="green" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <MdEmojiEmotions className="shareIcon" color="goldenrod" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
