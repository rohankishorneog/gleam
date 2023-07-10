import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router';
import './EditProfile.css'; // Import the external CSS file

const EditProfile = () => {
  const navigate = useNavigate();
  const { editUser, avatars } = useContext(UserContext);

  const [formData, setFormData] = useState({
    bio: '',
    url: '',
    avatarImg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editUser(formData);
    navigate('/home');
  };

  return (
    <div className="card-container">
      <form className="card" onSubmit={handleSubmit}>
        <label className="card-label">
          Bio:
          <input
            type="text"
            className="card-input"
            placeholder="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </label>
        <label className="card-label">
          URL:
          <input
            type="text"
            className="card-input"
            placeholder="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </label>
        <label className="card-label">
          Avatar Image:
          <select
            className="card-input"
            name="avatarImg"
            value={formData.avatarImg}
            onChange={handleChange}
          >
            <option value="">Select Avatar</option>
            {Object.entries(avatars).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          {formData.avatarImg && (
            <img
              src={formData.avatarImg}
              alt="Selected Avatar"
              className="avatar-image"
            />
          )}
        </label>
        <button type="submit" className="card-button">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
