import React from 'react';
import { getItem } from '../services/LocalStorageFuncs';

export const Profile = (props) => { // Add 'props' as a parameter
  const user = getItem('usuario');
  
  const toProfileEdit = () => {
    const { history: { push } } = props;
    push('/profile/edit');
  }

  return (
    <div>
      <p>{user ? user.name : 'User not found'}</p> {/* Check if 'user' exists before accessing 'name' */}
      <button
        onClick={toProfileEdit}  
      >
        Edit Profile
      </button>
    </div>
  );
};
