import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCompass, FiBookmark, FiUser, FiEdit } from 'react-icons/fi';
import Modal from 'react-modal';
import CreatePost from '../createPost/CreatePost';
import './SideLinks.css';

const SideLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="side-links">
        <div className="side-link">
          <Link to="/home">
            <FiHome className="side-link-icon" />
            <span className="side-link-text">Home</span>
          </Link>
        </div>
        <div className="side-link">
          <Link to="/explore">
            <FiCompass className="side-link-icon" />
            <span className="side-link-text">Explore</span>
          </Link>
        </div>
        <div className="side-link">
          <Link to="/bookmark">
            <FiBookmark className="side-link-icon" />
            <span className="side-link-text">Bookmarks</span>
          </Link>
        </div>
        <div className="side-link">
          <button onClick={openModal}>
            <FiEdit className="side-link-icon" />
            <span className="side-link-text">Create</span>
          </button>
        </div>
        <div className="side-link">
          <Link to="/profile">
            <FiUser className="side-link-icon" />
            <span className="side-link-text">Profile</span>
          </Link>
        </div>
        
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Post Modal"
        className="create-post-modal"
        overlayClassName="create-post-modal-overlay"
      >
        <CreatePost closeModal={closeModal} />
      </Modal>
      </div>

    
    
  );
};

export default SideLinks;
