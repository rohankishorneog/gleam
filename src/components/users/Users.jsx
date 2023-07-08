import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <Link to={`/users/${user._id}`}>Check</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;
