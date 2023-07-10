import React, { useContext } from 'react';
import { PostContext } from '../../../contexts/PostContext';
import { FiThumbsUp } from 'react-icons/fi';

const Like = ({ postId }) => {
  const { addLike } = useContext(PostContext);

  const handleLike = () => {
    addLike(postId);
  };

  return (
    <button className="post-action" onClick={handleLike}>
      <FiThumbsUp />
    </button>
  );
};

export default Like;
