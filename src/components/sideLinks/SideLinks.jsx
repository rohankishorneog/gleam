import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCompass, FiBookmark, FiUser, FiEdit } from 'react-icons/fi';
import Modal from 'react-modal';
import CreatePost from '../createPost/CreatePost';
import './SideLinks.css';
import { AuthContext } from '../../contexts/AuthContext';

const SideLinks = () => {
  const {loggedInUser}=useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="side-links-container">
      <div className="side-links">
      
          <Link to="/home" className="side-link">
            <FiHome className="side-link-icon" />
            <span className="side-link-text">Home</span>
          </Link>

      
          <Link to="/explore" className="side-link">
            <FiCompass className="side-link-icon" />
            <span className="side-link-text">Explore</span>
          </Link>

        
          <Link to="/bookmark" className="side-link">
            <FiBookmark className="side-link-icon" />
            <span className="side-link-text">Bookmarks</span>
          </Link>

      
          <button onClick={openModal} className="side-link">
            <FiEdit className="side-link-icon" />
            <span className="side-link-text">Create</span>
          </button>


          <Link to={`/users/${loggedInUser._id}` } className="side-link">
            <FiUser className="side-link-icon" />
            <span className="side-link-text">Profile</span>
          </Link>
        
       
        
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
      </div>

    
    
  );
};

export default SideLinks;
