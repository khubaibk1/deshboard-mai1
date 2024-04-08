// VideoUpload.jsx
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import uploadCload from "../images/upload-cloud-blue.svg";

const VideoUpload = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const navigate = useNavigate(); 

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setUploadedVideo(file);
    });
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: "video/mp4",
  });

  const handleNavigate = () => {
    if (uploadedVideo) {
      const videoUrl = URL.createObjectURL(uploadedVideo);
      navigate(`/uploads?videoUrl=${encodeURIComponent(videoUrl)}`); // Pass videoUrl as URL parameter
    }
  };

  
  if (uploadedVideo) {
    handleNavigate();
  }

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <button className="bg-[#F3F4F5] mt-10 rounded-full p-7">
          <img src={uploadCload} alt="upload" />
        </button>
        <p className="text-[30px] text-[#344054]  font-bold mt-5">
          Drag and drop here your assets
        </p>
        <p className="text-[14px] font-medium mt-3 mb-4 text-[#475467] max-w-[600px] mx-auto">
          For video content, use MP4s in H264/AAC format and a friendly bitrate
          (under 8 Mbps) for more reliable streaming. OurShuk uploads are
          restricted to 16 GB
        </p>
        <button
          type="button"
          className="py-[12px] px-[20px] mb-10 text-white rounded-[8px] bg-[#496AB1]  font-bold follow-btn-shadow"
          onClick={open}
        >
          Or browse
        </button>
      </div>
      {uploadedVideo && (
        <div>
          <p>Uploaded Video Preview:</p>
          <video controls width="400">
            <source src={URL.createObjectURL(uploadedVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
