// system
import { useState } from 'react';
// icons
import heartIcon from '../../images/heart.png';
import likeIcon from '../../images/like.png';

// data
import { friendList } from 'helpers/friendList';

// styles
import './style.css';

// icons
import { MdMoreVert } from 'react-icons/md';

const Post = ({ post }) => {
  const { desc, photo, date, userId, like, comment } = post;

  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    if (isLiked) {
      setLikes(state => state - 1);
    } else {
      setLikes(state => state + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={friendList.filter(user => user.id === userId)[0].avatar}
              alt="persone1"
              className="postProfileImg"
            />
            <span className="postUsername">
              {friendList.filter(user => user.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>

          <div className="postTopRight">
            <MdMoreVert size={24} />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt={desc || ''} className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={likeIcon}
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={heartIcon}
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{likes} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
