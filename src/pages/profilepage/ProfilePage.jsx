import React, { useContext, useState } from 'react';
import EditProfile from '../../components/editProfile/EditProfile';
import UserProfile from '../../components/userProfile/UserProfile';
import { AuthContext } from '../../contexts/AuthContext';


const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const {logout}=useContext(AuthContext)

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleLogout=()=>{
    logout()
  }

  return (
    <div>
      {!editMode ? (
        <>
          <UserProfile />
          <button onClick={handleEditClick}>Edit Profile</button>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <EditProfile />
      )}
    </div>
  );
};

export default ProfilePage;
