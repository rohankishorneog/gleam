import React, { useContext } from 'react';
import { PostContext } from '../../../contexts/PostContext';
import { FiTrash2 } from 'react-icons/fi';

const Delete = ({ postId }) => {
  const { deletePost } = useContext(PostContext);

  const handleDelete = () => {
    deletePost(postId);
  };

  return (
    <button className="post-action" onClick={handleDelete}>
      <FiTrash2 />
    </button>
  );
};

export default Delete;
