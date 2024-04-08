import React from "react";

const ProfileAvatar = ({ image }) => {
  return (
    <div>
      <div className="w-[65px] h-[65px] relative">
        <div className="w-2 h-2 bg-[#496AB1] rounded-full absolute right-0"></div>
        <img src={image} className="rounded-full" alt="profile" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
