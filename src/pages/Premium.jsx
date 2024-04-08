import React from "react";
import { Select, Space } from "antd";
import CrownGreen from "../images/crown-green.svg";
import CrownYellow from "../images/crown-yellow.svg";
import tick from "../images/check.svg";

const PremiumData = [
  "Badge on profile",
  "Automatic rewards confirmation",
  "Early access to new features",
];
const PremiumPlusYearly = [
  "No ads",
  "Badge on profile",
  "Automatic rewards confirmation",
  "Early access to new features",
];
const PremiumPlusMonthly = [
  "No ads",
  "Badge on profile",
  "Automatic rewards confirmation",
  "Early access to new features",
];

const Premium = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <div>
        <div className="w-full rounded-[8px] bg-[#496AB1] h-[220px] flex flex-row items-center p-10 gap-8">
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <h1 className="text-[24px] font-bold text-center text-white">
              OurShuk Premium
            </h1>
            <div>
              <Space wrap>
                <Select
                  defaultValue="Anonymous"
                  style={{ width: 270 }}
                  onChange={handleChange}
                  options={[
                    { value: "New", label: "New" },
                    { value: "Featured", label: "Featured" },
                    { value: "Popular", label: "Popular" },
                    { value: "Kids", label: "Kids" },
                  ]}
                />
              </Space>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-[30px] text-center mb-8 font-bold">
            Available Memberships
          </h1>

          <div className="flex flex-row gap-10">
            <div className="max-w-[380px] min-h-[600px] rounded-[16px] border-t-[5px] border-t-[#4AAF7E] p-[32px]  box-shadow">
              <div className="flex flex-row justify-center items-center gap-3">
                <h1 className="text-center font-bold text-[24px] ">Premium</h1>
                <img src={CrownGreen} alt="crown" />
              </div>
              <div className="text-center mt-5 mb-7">
                <span className="text-[48px] font-medium">$11.88</span>{" "}
                <span className="txet-[30px]  font-normal">/yr</span>
                <p className="text-[#344054] font-medium">Interval: Yearly</p>
              </div>

              <div className="border-b-[1px] border-[#EAECF0]"></div>

              <div className="text-[#344054] flex flex-col mt-8 gap-7">
                <p className=" font-medium text-[17px]">Includes: </p>
                <div className="flex flex-col gap-3 ">
                  {PremiumData.map((items) => {
                    return (
                      <div className="flex flex-row items-center gap-4">
                        <img src={tick} alt="tick" />
                        <p className="font-medium text-[17px]">{items}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="max-w-[780px] w-full min-h-[600px] rounded-[16px] border-t-[5px] border-t-[#AD7E4C] p-[32px]  box-shadow">
              <div className="flex flex-row justify-center items-center gap-3">
                <h1 className="text-center font-bold text-[24px] ">Premium+</h1>
                <img src={CrownYellow} alt="crown" />
              </div>

              <div className="flex flex-row justify-between ">
                <div className="max-w-[380px]">
                  <div className="text-center  mt-5 mb-7">
                    <span className="text-[48px] font-medium">$32.89</span>{" "}
                    <span className="txet-[30px]  font-normal">/yr</span>
                    <p className="text-[#344054] font-medium">
                      Interval: Yearly
                    </p>
                  </div>

                  <div className="border-b-[1px] border-[#EAECF0]"></div>

                  <div className="text-[#344054] flex flex-col mt-8 gap-7">
                    <p className=" font-medium text-[17px]">Includes: </p>
                    <div className="flex flex-col gap-3 ">
                      {PremiumPlusYearly.map((items) => {
                        return (
                          <div className="flex flex-row items-center gap-4">
                            <img src={tick} alt="tick" />
                            <p className="font-medium text-[17px]">{items}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="max-w-[380px]">
                  <div className="text-center  mt-5 mb-7">
                    <span className="text-[48px] font-medium">$2.99</span>{" "}
                    <span className="txet-[30px]  font-normal">/yr</span>
                    <p className="text-[#344054] font-medium">
                      Interval: Yearly
                    </p>
                  </div>

                  <div className="border-b-[1px] border-[#EAECF0]"></div>

                  <div className="text-[#344054] flex flex-col mt-8 gap-7">
                    <p className=" font-medium text-[17px]">Includes: </p>
                    <div className="flex flex-col gap-3 ">
                      {PremiumPlusMonthly.map((items) => {
                        return (
                          <div className="flex flex-row items-center gap-4">
                            <img src={tick} alt="tick" />
                            <p className="font-medium text-[17px]">{items}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
