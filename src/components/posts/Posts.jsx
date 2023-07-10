import React, { useContext, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { Link } from 'react-router-dom';
import {  FiEdit } from 'react-icons/fi';
import Bookmark from '../Buttons/bookmark/Bookmark';
import Like from '../Buttons/Like/Like';
import Dislike from '../Buttons/DisLike/DisLike';
import Delete from '../Buttons/Delete/Delete';
import './Posts.css';
import { AuthContext } from '../../contexts/AuthContext';

const Posts = () => {
  const { posts, isLoading } = useContext(PostContext);
  const { loggedInUser } = useContext(AuthContext);
  const [showTrending, setShowTrending] = useState(false);

  const handleToggle = () => {
    setShowTrending((prevShowTrending) => !prevShowTrending);
  };

  const sortedPosts = showTrending
    ? [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="posts-container">
      <div className="toggle-container">
        <button className={`toggle-button ${showTrending ? 'active' : ''}`} onClick={handleToggle}>
          {showTrending ? 'Trending' : 'Recently Created'}
        </button>
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {sortedPosts.map((post) => (
            <div className="post" key={post._id}>
              <h3 className="post-username">{post.username}</h3>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <span className="post-likes">{post.likes.likeCount}</span>
                <Like postId={post._id} />
                <Dislike postId={post._id} />
                {loggedInUser.username === post.username && (
                  <>
                    <Delete postId={post._id} />
                    <button className="post-action">
                      <Link to={`/editPost/${post._id}`}>
                        <FiEdit />
                      </Link>
                    </button>
                  </>
                )}
                {loggedInUser.username !== post.username && <Bookmark id={post._id} />}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
