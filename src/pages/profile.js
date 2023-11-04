// Profile.js
import React, { useState } from 'react';

const Profile = ({ user, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(editedUser);
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {isEditing ? (
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
          <br />
          <label>Email: </label>
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
          <br />
          <label>Phone Number: </label>
          <input
            type="tel"
            value={editedUser.phoneNumber}
            onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
          />
          <br />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
