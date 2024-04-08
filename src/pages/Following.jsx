import React from "react";
import { useState } from "react";
import ProfileAvatar from "../components/ProfileAvatar";

import yogaImg from "../images/yoga.svg";
import spiritImg from "../images/spirit.svg";
import Card from "../components/Card";
import favHeart from "../images/fav-heart.svg";
import card1Img from "../images/yoga1-card.svg";
import lockImg from "../images/lock.svg";
import yogaLogo from "../images/yoga-logo1.svg";
import card1 from "../images/fitness.svg";
import card2 from "../images/fitness1.svg";
import avatar1Logo from "../images/avatar1.svg";
import avatar2Logo from "../images/avatar2.svg";
import settingIcon from "../images/setting-icon.svg";
import heartWhiteIcon from "../images/heart-icon-white.svg";
import layOutGridIcon from "../images/grid-list.svg";
import filterLineIcon from "../images/filter-lines.svg";
import ProfileAvatarImg1 from "../images/profile-avatar1.svg";
import { Select, Space } from "antd";
import layOutListIcon from "../images/grid-box.svg";

const Avatars = [
  {
    a1: "@images/profile-avatar1.svg",
  },
  {
    a2: "@images/profile-avatar1.svg",
  },
  {
    a3: "@images/profile-avatar1.svg",
  },
  {
    a4: "@images/profile-avatar1.svg",
  },
  {
    a5: "@images/profile-avatar1.svg",
  },
  {
    a6: "@images/profile-avatar1.svg",
  },
  {
    a2: "@images/profile-avatar1.svg",
  },
  {
    a3: "@images/profile-avatar1.svg",
  },
  {
    a4: "@images/profile-avatar1.svg",
  },
  {
    a5: "@images/profile-avatar1.svg",
  },
  {
    a6: "@images/profile-avatar1.svg",
  },
];





const More = [
  {
    img: card1,
    name: " Best Beginner Yoga Flow Class",
    logo: avatar1Logo,
    title: "Fitness",
    lock: "false",
  },
  {
    img: card2,
    name: " Best Beginner Yoga Flow Class",
    logo: avatar2Logo,
    title: "Fitness",
    lock: "true",
  },
];


const Following = () => {
  const [CardData, setCardData] = useState([
    {
      img: card1Img,
      name: " Best Beginner Yoga Flow Class",
      logo: yogaLogo,
      title: "Yoga",
      lock: "true",
    },
    {
      img: card1,
      name: " Best Beginner Yoga Flow Class",
      logo: avatar1Logo,
      title: "Fitness",
      lock: "false",
    },
    {
      img: card2,
      name: " Best Beginner Yoga Flow Class",
      logo: avatar2Logo,
      title: "Fitness",
      lock: "true",
    },
  ]);

  const handleMore = () => {
    setCardData(currentData => [...currentData, ...More]);

  };
  
  

  const [isGrid, setIsGrid] = useState(true);

  // Function to toggle the layout
  const handleLayoutToggle = () => {
    setIsGrid(!isGrid);
  };
  
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="w-full rounded-[8px] bg-[#496AB1] h-[220px] flex flex-row items-center p-10 gap-8">
        <div className="p-10 bg-[#244489] rounded-[6px]">
          <img src={heartWhiteIcon} alt="heart-icon" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[48px] font-medium text-white">Your Following</h1>
          <div className="text-[15px] text-white flex flex-row items-center gap-2">
            Stephen Smith{" "}
            <div className="w-[5px] h-[5px] bg-white rounded-full "></div> 72
            Channels
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center  justify-between my-5"></div>

      <div className="flex flex-row justify-between">
        <Space wrap>
          <Select
            defaultValue="Sort by"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "New", label: "New" },
              { value: "Featured", label: "Featured" },
              { value: "Popular", label: "Popular" },
              { value: "Kids", label: "Kids" },
            ]}
          />
        </Space>

        <div className="flex flex-row gap-4">
          <button className="p-2 rounded-[8px] border-[1px] border-[#D0D5DD]">
            Manage
          </button>
          <button
            className="p-2 rounded-[8px] border-[1px] border-[#D0D5DD]"
            onClick={handleLayoutToggle}
          >
            {isGrid ? (
              <img src={layOutGridIcon} alt="Switch to list layout" />
            ) : (
              <img src={layOutListIcon} alt="Switch to grid layout" />
            )}
          </button>
          <button className="p-2 rounded-[8px] border-[1px] border-[#D0D5DD]">
            <img src={filterLineIcon} alt="filter" />
          </button>
        </div>
      </div>
      <div className="flex flex-row  items-center justify-between ">
        <div className="flex items-center flex-row gap-2 mt-8 mb-3">
          <img src={favHeart} alt="fav" />
          <p className="text-[24px] text-[#1D2939]  font-bold">Following</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-[#496AB1] text-[14px]  font-bold ">Customize</p>
          <img src={settingIcon} alt="setting" />
        </div>
      </div>

      <div className="flex flex-row  justify-between my-4">
        {Avatars.map(() => {
          return (
            <div>
              <ProfileAvatar image={ProfileAvatarImg1} />
            </div>
          );
        })}
      </div>

      <div className={`grid ${isGrid?'grid-cols-3':'grid-cols-1'}  justify-between`}>
        {CardData.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              name={item.name}
              logo={item.logo}
              title={item.title}
              lock={item.lock}
              layout={isGrid}
            />
          );
        })}
      </div>

      <div className="flex flex-row justify-center my-8">
        <button
          className="px-[80px] py-[10px] border-[1px] border-[#D0D5DD] rounded-[8px] "
          onClick={() => handleMore()}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Following;
