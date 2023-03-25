import React from 'react';
import ProfileImage from '../../img/img.jpg'; // import the image file


function ProfilePhoto() {
  return (
    <img
      src={ProfileImage}
      alt="Profile"
      style={{ borderRadius: '50%', width: '100px', height: '100px' }}
    />
  );
}

export default ProfilePhoto;
