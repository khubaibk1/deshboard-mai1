import React from "react";
import lockImg from "../images/lock.svg";
import { NavLink } from "react-router-dom";

const Card = ({ img, name, logo, title, lock, layout }) => {
  return (
    <div>
      <div
        className={` my-5 flex ${
          layout ? "flex-col w-[400px]" : "flex-row items-start w-full gap-6"
        }`}
      >
        <div className=" rounded-[50px] relative  shadow-lg  mb-4">
          <img
            src={img}
            alt="img"
            className="w-full min-w-[400px] object-cover"
          />
          <p className="bg-[#00000066] text-[#FFFFFF] absolute py-[4px] px-[16px] rounded-[50px] top-2 left-2">
            {title}
          </p>

          <div
            className={`absolute inset-0  items-center justify-center ${
              lock === false ? "hidden" : "flex"
            } `}
          >
            <img
              src={lockImg}
              alt="lock"
              className="bg-[#FFFFFF66] p-4 rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row  items-center gap-3 mt-1 ">
            <img src={logo} alt="logo" />
            <div className="flex flex-col gap-1">
              <h1 className=" font-bold text-[18px]">{name}</h1>
              <div className="text-[15px] text-[#475467] flex flex-row items-center gap-2">
                <NavLink to={"/creator"}>
                <button> Timothy Ricks</button>
                </NavLink>
                {" "}
                <div className="w-[5px] h-[5px] bg-[#475467] rounded-full "></div>{" "}
                Daily Mindfulness
              </div>
            </div>
          </div>
          {!layout && (
            <div className="max-w-[78-px]">
              <p className="text-[#475467] font-medium">
                WooCommerce is awesome. But, when customers want to log-in to
                track their orders, they are presented with the default
                WordPress login experience, which isn't ideal. So, watch this
                video and...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
