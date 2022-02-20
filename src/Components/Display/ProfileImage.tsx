import React from "react";

interface IProfileImageProps {
  width?: string;
  height?: string;
  source?: string;
}

const ProfileImage: React.FC<IProfileImageProps> = ({
  width,
  height,
  source,
}) => {
  return (
    <div className={`center__container--row ${width} ${height}  border border-blue-400`}>
      <img
        src={require('../assets/Profile.jpg')}
        alt="Profile"
        className={`${width} ${height} rounded-full`}
      />
    </div>
  );
};

export default ProfileImage;
