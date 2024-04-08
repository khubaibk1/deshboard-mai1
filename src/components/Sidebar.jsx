import React, { useState } from "react";
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
import { NavLink } from "react-router-dom";
import homeIcon from "../images/home.svg";
import heartIcon from "../images/heart.svg";
import crownIcon from "../images/crown.svg";
import starIcon from "../images/star.svg";
import musicIcon from "../images/music.svg";
import hatIcon from "../images/graduation-hat.svg";
import plusIcon from "../images/medical-cross.svg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <img src={homeIcon} alt="home-icon" />,
    },
    {
      path: "/following",
      name: "Following",
      icon: <img src={heartIcon} alt="home-icon" />,
    },
    {
      path: "/premium",
      name: "Premium",
      icon: <img src={crownIcon} alt="home-icon" />,
    },
    {
      path: "/featured",
      name: "Featured",
      icon: <img src={starIcon} alt="home-icon" />,
    },
    {
      path: "/music",
      name: "Music",
      icon: <img src={musicIcon} alt="home-icon" />,
    },
    {
      path: "/education",
      name: "Education",
      icon: <img src={hatIcon} alt="home-icon" />,
    },
    {
      path: "/health",
      name: "Health",
      icon: <img src={plusIcon} alt="home-icon" />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "200px" : "110px" }}
        className="sidebar py-5 "
      >
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className=" py-[15px] my-3 gap-2 hover:bg-[#E7EFFF] hover:text-[#496AB1]  px-[25px] flex flex-col items-center mx-2 rounded-[8px]"
            activeclassName="active"
          >
            <div className="icon ">{item.icon}</div>
            <div className="text-[#788396] text-[14px] text-center font-medium">
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
