import React, { useContext } from 'react';
import { PostContext } from '../../../contexts/PostContext';
import { FiThumbsUp } from 'react-icons/fi';
import './Like.css'

const Like = ({ postId }) => {
  const { addLike } = useContext(PostContext);

  const handleLike = () => {
    addLike(postId);
  };

  return (
    <button onClick={handleLike}>
      <FiThumbsUp   className="like-action"/>
    </button>
  );
};

export default Like;
