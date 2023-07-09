import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { Link } from 'react-router-dom';

const Posts = () => {
  const { posts, isLoading, addLike, dislike, deletePost } = useContext(PostContext);

  const handleLike = (id) => {
    addLike(id);
  };

  const handleDislike = (id) => {
    dislike(id);
  };

  const handleDelete = (id) => {
    deletePost(id);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.username}</h3>
          <p>{post.content}</p>
          <p>
            <span>{post.likes.likeCount}</span>
            <button onClick={() => handleLike(post._id)}>Like</button>
            <button onClick={() => handleDislike(post._id)}>Dislike</button>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
            <button>
              <Link to={`/editPost/${post._id}`}>Edit</Link>
            </button>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
