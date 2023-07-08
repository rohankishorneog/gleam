import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router";

const Profile = () => {
    const {id}=useParams()
    console.log(id)
  const { selectedUser, getUserById } = useContext(UserContext);

  useEffect(() => {
    getUserById(id);
  }, []);

  console.log(selectedUser)

  return (
    <div>
      {selectedUser ? (
        <div>
          <h2>Profile</h2>
          <p>Name: {selectedUser.firstName}</p>
          <p>User name: {selectedUser.username}</p>
          {/* Add other user details as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
