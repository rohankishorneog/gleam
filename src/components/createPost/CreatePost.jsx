import React, { useState, useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';

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

    // Call the createPost function with formData
    createPost(formData);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={formData.postData.content}
            onChange={handleOnChange}
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
