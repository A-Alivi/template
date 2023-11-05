import React from 'react';

function ProfilePicture() {
  // Replace 'your-image-url.jpg' with the URL of your profile picture.
  const imageUrl = 'https://images3.alphacoders.com/133/1334920.png';

  return (
    <div className="profile-picture">
      <img src={imageUrl} alt="Profile" />
    </div>
  );
}

export default ProfilePicture;
