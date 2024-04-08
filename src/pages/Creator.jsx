import React from "react";
import creatorImg from "../images/creator-img.svg";
import verifiedIcon from "../images/verified.svg";
import creatorC1 from "../images/creatorC1.svg"
import creatorC2 from "../images/craetorC2.svg"

const Creator = () => {
  return (
    <div>
      <div>
        <div className="w-full rounded-[8px] creator-bg  p-10  text-white flex flex-row justify-between items-end">
          <div className=" flex flex-row items-center gap-2">
            <div className="">
              <img src={creatorImg} alt="creator" />
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row gap-2 items-center">
                <img src={verifiedIcon} alt="verified" />
                <p>Verified Creator</p>
              </div>
              <h1 className="text-[96px] font-bold">David Lee</h1>
              <div className="text-[15px] text-white flex flex-row items-center gap-2">
                25,213 Followers{" "}
                <div className="w-[5px] h-[5px] bg-white rounded-full "></div>{" "}
                72 72 Videos
              </div>
            </div>
          </div>
          <div>
            <button className="py-[12px] px-[20px] rounded-[8px] bg-[#496AB1]  font-bold follow-btn-shadow">
              Follow
            </button>
          </div>
        </div>

        <div className=" max-w-[670px] text-center mx-auto my-16">
          <h1 className=" font-semibold text-[#1D2939] text-[48px]  leading-[60px]">
            A journey seeking strength balance, and flexibility
          </h1>

          <p className=" text-[#344054] mt-5 font-medium">
            {" "}
            David Lee is a yoga, meditation, and breathwork teacher based in
            Santa Monica, California. Though he started his yoga journey seeking
            strength, balance, and flexibility as a way to improve his surfing
            skills, he soon realized that these abilities reflect a deeper and
            more powerful shift taking place within.
            <span className="text-[#1D2939]">See more</span>
          </p>
        </div>

        <div className="flex flex-row justify-between">
            <img src={creatorC1} alt="creator data1"/>
            <img src={creatorC2} alt="creator data2"/>

        </div>
      </div>
    </div>
  );
};

export default Creator;
