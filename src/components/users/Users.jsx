import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Follow from '../follow/Follow';
import { AuthContext } from '../../contexts/AuthContext';
import './Users.css';

const Users = () => {
  const { users } = useContext(UserContext);
  const { loggedInUser } = useContext(AuthContext);
  const [visibleUsers, setVisibleUsers] = useState(4);

  const loadMoreUsers = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 2);
  };

  const loadLessUsers = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers - 2);
  };

  return (
    <div className="users-container">
      <h3>Suggestions</h3>
      {visibleUsers < users.length && (
        <div className="load-buttons">
          <button onClick={loadMoreUsers} className="load-more-button">
            More
          </button>
          {visibleUsers > 4 && (
            <button onClick={loadLessUsers} className="load-less-button">
              less
            </button>
          )}
        </div>
      )}
      
        <div className="user-list">
          {users.slice(0, visibleUsers).map((user) => (
            user._id !== loggedInUser._id && (
              <div className="user-card" key={user._id}>
                <div className="user-info">
                  <Link to={`/users/${user._id}`} className="user-link">
                    <div className="avatar-container">
                      <img
                        className="user-avatar"
                        src={user.avatarImg}
                        alt="User Avatar"
                      />
                    </div>
                    <div className='user-name-details'>
                    <p className="user-name">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="user-username">@{user.username}</p>
                    </div>
                   
                  </Link>
                </div>
                <div className="follow-section">
                  <Follow id={user._id} />
                </div>
              </div>
            )
          ))}
        </div>

    </div>
  );
};

export default Users;
