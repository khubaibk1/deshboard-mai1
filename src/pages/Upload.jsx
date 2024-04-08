import React from "react";
import VideoUpload from "../components/VideoUpload";

const Upload = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-[30px] font-bold text-[#1D2939]">
            {" "}
            Enter Your Prompt Here
          </h1>
          <textarea
            className="w-full h-[170px] mt-8  font-medium p-2 border- text-[#667085] border-[1px] border-[#D0D5DD] rounded-[8px] resize-none"
            placeholder="Enter Description"
          ></textarea>
        </div>

        <div className="w-full flex flex-row justify-end">
          <button className=" text-white my-7 bg-[#496AB1] rounded-[8px] py-[12px] px-[20px]">
            Create Video
          </button>
        </div>

        <div>
          <VideoUpload />
        </div>
      </div>
    </div>
  );
};

export default Upload;
