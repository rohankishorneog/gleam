import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Follow from '../follow/Follow';
import { AuthContext } from '../../contexts/AuthContext';

const Users = () => {
  const { users } = useContext(UserContext);
  console.log(users)
  const {loggedInUser}=useContext(AuthContext)
  console.log(loggedInUser)

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <Link to={`/users/${user._id}`}>Check</Link>
          {user._id !== loggedInUser._id && <Follow id={user._id} />}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;
