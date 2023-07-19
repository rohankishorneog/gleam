import React, { useState, useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { FiPlus } from 'react-icons/fi'; // Import the desired icon from react-icons
import './CreatePost.css';

const CreatePost = () => {
  const { createPost } = useContext(PostContext);
  const [formData, setFormData] = useState({
    postData: {
      content: '',
    },
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      postData: {
        ...prevData.postData,
        [name]: value,
      },
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    createPost(formData);
  };

  return (
    <div className='create-post-container'>
      <form className="create-post-form" id="createPostForm" onSubmit={handleOnSubmit}>
        <textarea
          className="create-post-textarea"
          id="content"
          name="content"
          value={formData.postData.content}
          onChange={handleOnChange}
          rows={5}
          placeholder="..."
          required
        ></textarea>
        <button type="submit" className="create-post-button" id="createPostButton">
          <FiPlus className="create-post-icon" /> 
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
