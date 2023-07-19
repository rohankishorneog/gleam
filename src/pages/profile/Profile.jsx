import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PostContext } from "../../contexts/PostContext";
import { useParams } from "react-router";
import "./Profile.css";
import { FaHeart } from "react-icons/fa";
import EditProfile from "../../components/editProfile/EditProfile";
import Users from "../../components/users/Users";
import Like from "../../components/Buttons/Like/Like";
import Delete from "../../components/Buttons/Delete/Delete";
import Dislike from "../../components/Buttons/DisLike/DisLike";
import Bookmark from "../../components/Buttons/bookmark/Bookmark";
import Follow from "../../components/follow/Follow";
import { AuthContext } from "../../contexts/AuthContext";
import SideLinks from "../../components/sideLinks/SideLinks";
// import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import Modal from "react-modal";
import EditPost from "../../components/editPost/EditPost";
import Header from "../../components/Header/Header";

const Profile = () => {
  const { id } = useParams();
  const { selectedUser, getUserById } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const { loggedInUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedPostId, setSelectedPostId] = useState(null); // State for selected post ID

  const openModal = (postId) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPostId(null);
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    getUserById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const userPosts = posts.filter((post) => post.username === selectedUser?.username);

  return (
    <div>
      <Header/>
    <div className="profile">
      <div className="left-section">
        <SideLinks />
      </div>
      <div>
        <div className="second-section">
          <div className="mid-section">
            {selectedUser ? (
              <div className="profile-container">
                <div className="user-details-container">
                  <img src={selectedUser.avatarImg} alt="Avatar" className="profile-user-avatar" />
                  <div className="user-details-texts">
                    <p>
                      name: {selectedUser.firstName} {selectedUser.lastName}
                    </p>
                    <p>username: {selectedUser.username}</p>

                    <p>bio: {selectedUser.bio}</p>
                    <p className="user-details-url">
                      <a href={selectedUser.url}>Link to {selectedUser.username}'s portfolio</a>
                    </p>
                    {loggedInUser._id === id ? (
                      <div>
                        {!editMode ? (
                          <>
                            <button className="profile-edit-btn" onClick={handleEditClick}>
                              Edit Profile
                            </button>
                            <button className="profile-logout-btn" onClick={handleLogout}>
                              logout
                            </button>
                          </>
                        ) : (
                          <EditProfile />
                        )}
                      </div>
                    ) : (
                      <div>
                        <Follow id={selectedUser._id} />
                      </div>
                    )}
                  </div>
                </div>

                <h3>Posts by {selectedUser.username}</h3>
                <div className="post-scroll">
                  {userPosts.map((post) => (
                    <div key={post._id} className="post">
                      <p>{post.content}</p>
                      <div className="buttons-container">
                        <p>
                          <span className="like-icon">
                            <FaHeart />
                            <span className="like-count">{post.likes.likeCount}</span>
                          </span>
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
                        {loggedInUser.username === post.username && (
                          <>
                            <Delete postId={post._id} />
                            <button className="post-action" onClick={() => openModal(post._id)}>
                              <FiEdit />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Loading profile...</p>
            )}
          </div>

          <div className="right-section">
            <Users />
          </div>
        </div>
      </div>

      {selectedPostId && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Post Modal"
          className="Edit-post-modal"
          overlayClassName="Edit-post-modal-overlay"
        >
          <EditPost postId={selectedPostId}/>
        </Modal>
      )}
    </div>
    </div>
  );
};

export default Profile;