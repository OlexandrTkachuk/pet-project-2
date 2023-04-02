import Share from 'components/Share/Share';
import Post from 'components/Post/Post';
import { posts } from 'helpers/posts';
import './style.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
