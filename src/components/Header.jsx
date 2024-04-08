import React from "react";
import { useState } from "react";
import logo from "../images/logo1.svg";
import uploadCload from "../images/upload-cloud.svg";
import question from "../images/question.svg";
import searchIcon from "../images/search-md.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 90);
  };

  return (
    <div className="flex flex-row  items-center justify-between px-7 py-3 border-b-[1px] border-[#EAECF0]">
      <div className="flex flex-row gap-10 ">
        <button
          className="bg-[#EDF0F7] hover:bg-[#d9dadefa] rounded-full p-4"
          onClick={handleClick}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <path
              d="M10 2.5L10 17.5M15 2.5L15 17.5M5 2.5L5 17.5"
              stroke="#667085"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="search-container">
        <button type="submit" className="search-icon relative ">
          <img
            src={searchIcon}
            alt="search"
            className="absolute left-4 top-2.5"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] border-[1px] border-[#D0D5DD] rounded-[10px] pl-[40px] py-2"
          />
        </button>
      </div>
      
      <div className="flex flex-row gap-5">
        <NavLink to={"/upload"}>
        <button className="bg-[#F3F4F5]  rounded-full p-4">
          <img src={uploadCload} alt="upload" />
        </button>
        </NavLink>
        <button className="bg-[#F3F4F5]  rounded-full p-4">
          <img src={question} alt="question" />
        </button>
      </div>

      <div className="flex flex-row gap-5">
        <button className="text-[16px] font-semibold border-[1px] border-[#D0D5DD] px-[20px] py-[10px] rounded-[8px]">
          Login
        </button>
        <button className="text-[16px] font-semibold border-[1px] border-[#D0D5DD] px-[20px] py-[10px] rounded-[8px] bg-[#496AB1] text-white">
          SignUp
        </button>
      </div>

    </div>
  );
};

export default Header;
