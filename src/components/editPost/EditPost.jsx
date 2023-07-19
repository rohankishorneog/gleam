import React, { useState, useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { useNavigate} from 'react-router';
import "./EditPost.css"

const EditPost = ({postId}) => {
  // const { postId } = useParams();
  console.log(postId)
  const { editPost } = useContext(PostContext);
  const [formData, setFormData] = useState({
    postData: {
      content: ''
    }
  });
  const navigate = useNavigate();

  const onClose = () => {
    navigate('/home');
  };

  const handleContentChange = (event) => {
    setFormData({
      postData: {
        content: event.target.value
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editPost(postId, formData.postData);
    onClose();
  };
  

  return (
    <div className="EditPost-container">
    <h3 className="EditPost-title">Edit Post</h3>
    <form onSubmit={handleSubmit} className="EditPost-form">
      <textarea
        value={formData.postData.content}
        onChange={handleContentChange}
      />
      <button type="submit">Save</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  </div>
  );
};

export default EditPost;
