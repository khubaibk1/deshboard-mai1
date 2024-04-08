import React from "react";
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

const CardData = [
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
];

const Home = () => {
  return (
    <div>
      <div className="flex flex-row w-full items-center justify-between h-[500px] bg-[#E7EFFF] rounded-[15px] ">
        <div className="max-w-[620px] pl-10 flex flex-col gap-5">
          <h1 className=" text-[48px]  font-medium   leading-[60px]">
            Discover Your Inner Balance with OurShuk!
          </h1>
          <p className=" font-medium   leading-6 ">
            Welcome to OurShuk, your ultimate destination for holistic wellness
            and transformative yoga experiences.
          </p>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <img src={yogaImg} alt="yoga" />
          </div>
          <div>
            <img src={spiritImg} alt="spirit" />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center  justify-between my-5">
        <p className="bg-[#4969B2] py-[8px] px-[16px] text-[14px] font-medium text-white  text-center rounded-[50px]">
          Featured
        </p>
        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Just Added
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Popular
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Original
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Kids
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Action
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Crime
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Comedy
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Drama
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Popular
        </p>

        <p className="bg-[#F3F4F5] py-[8px] px-[16px] text-[14px] font-medium text-[#788396]  text-center rounded-[50px]">
          Just Added
        </p>
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

      <div className="flex flex-row  justify-between">
        {CardData.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              name={item.name}
              logo={item.logo}
              title={item.title}
              lock={item.lock}
              layout={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
