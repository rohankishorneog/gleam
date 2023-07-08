import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
