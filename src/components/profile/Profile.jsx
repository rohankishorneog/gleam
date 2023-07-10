import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PostContext } from "../../contexts/PostContext";
import { useParams } from "react-router";
import "./Profile.css";
import { FaHeart } from "react-icons/fa"; 
import Like from "../Buttons/Like/Like";
import Dislike from "../Buttons/DisLike/DisLike";
import Bookmark from "../Buttons/bookmark/Bookmark";

const Profile = () => {
  const { id } = useParams();
  const { selectedUser, getUserById } = useContext(UserContext);
  const { posts } = useContext(PostContext);

  useEffect(() => {
    getUserById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userPosts = posts.filter((post) => post.username === selectedUser?.username);

  return (
    <div className="profile">
      {selectedUser ? (
        <div className="profile-card">
          <h2>Profile</h2>
          <div className="user-details">
            <p>Name: {selectedUser.firstName} {selectedUser.lastName}</p>
            <p>User name: {selectedUser.username}</p>
            <img src={selectedUser.avatarImg} alt="Avatar" />
            <p>Bio: {selectedUser.bio}</p>
            <p>
              URL: <a href={selectedUser.url}>{selectedUser.url}</a>
            </p>
          </div>

          <h3>Posts by {selectedUser.username}</h3>
          {userPosts.map((post) => (
            <div key={post._id} className="post">
              <p>{post.content}</p>
              <div className="buttons-container">
                <p>
                  <span className="like-icon">
                    <FaHeart />
                  </span>
                  <span className="like-count">{post.likes.likeCount}</span>
                </p>
                <span>
                  <Like postId={post._id} />
                </span>
                <span>
                  <Dislike postId={post._id} />
                </span>
                <span>
                  <Bookmark postId={post._id} />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
