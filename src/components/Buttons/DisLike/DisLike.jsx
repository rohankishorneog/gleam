import React, { useContext } from 'react';
import { PostContext } from '../../../contexts/PostContext';
import { FiThumbsDown } from 'react-icons/fi';

const Dislike = ({ postId }) => {
  const { dislike } = useContext(PostContext);

  const handleDislike = () => {
    dislike(postId);
  };

  return (
    <button className="post-action" onClick={handleDislike}>
      <FiThumbsDown />
    </button>
  );
};

export default Dislike;
