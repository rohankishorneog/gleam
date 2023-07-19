import React, { useContext, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { Link } from 'react-router-dom';
import {  FiEdit, FiHeart } from 'react-icons/fi';
import Bookmark from '../Buttons/bookmark/Bookmark';
import Like from '../Buttons/Like/Like';
import Dislike from '../Buttons/DisLike/DisLike';
import Delete from '../Buttons/Delete/Delete';
import './Posts.css';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import {  FaSort } from 'react-icons/fa';

const Posts = () => {
  const { users, defaultAvatar } = useContext(UserContext);
  const { posts, isLoading } = useContext(PostContext);
  const { loggedInUser } = useContext(AuthContext);
  const [showTrending, setShowTrending] = useState(false);
  // const {isLiked, setIsLiked}=useState(false)

  const handleToggle = () => {
    setShowTrending((prevShowTrending) => !prevShowTrending);
  };

  const sortedPosts = showTrending
    ? [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <div className="toggle-container">
        <button className={`toggle-button ${showTrending ? 'active' : ''}`} onClick={handleToggle}>
            <FaSort/>
          {showTrending ? 'Trending' : 'Recently Created'}
        </button>
      </div>
      <div className="posts-container">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {sortedPosts.map((post) => {
            const user = users.find((user) => user.username === post.username);
            const avatarSrc = user ? user.avatarImg : defaultAvatar;
          

            return (
              <div className="post" key={post._id}>
                <Link to={`/users/${user?._id}`} className='post-user-details'>
              
                <img className="post-user-avatar" src={avatarSrc} alt={post.username} />
                <h3 className="post-username">{post.username}</h3>
                
            
                </Link>
               
                <p className="post-content">{post.content}</p>
                <div className="post-actions">
                  <span className="post-likes">
                    <FiHeart/>
                    {post.likes.likeCount}</span>
                  <Like postId={post._id} />
                  <Dislike postId={post._id} />
                  {loggedInUser.username === post.username && (
                    <>
                      <Delete postId={post._id} />
                      <button className="post-action" >
                        <Link to={`/editPost/${post._id}`} >
                          <FiEdit />
                        </Link>
                      </button>
                    </>
                  )}
                  {loggedInUser.username !== post.username && <Bookmark id={post._id} />}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
    </div>
  );
};

export default Posts;
