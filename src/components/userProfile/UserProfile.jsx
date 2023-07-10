import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const UserProfile = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className="user-details">
      <p>Name: {loggedInUser.firstName} {loggedInUser.lastName}</p>
      <p>User name: {loggedInUser.username}</p>
      <img src={loggedInUser.avatarImg} alt="Avatar" />
      <p>Bio: {loggedInUser.bio}</p>
      <p>
        URL: <a href={loggedInUser.url}>{loggedInUser.url}</a>
      </p>
    </div>
  );
};

export default UserProfile;
