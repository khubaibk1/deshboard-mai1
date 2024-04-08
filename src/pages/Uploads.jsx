import React from 'react';
import { useLocation } from 'react-router-dom';

const Uploads = () => {
  const location = useLocation();
  const videoUrl = new URLSearchParams(location.search).get('videoUrl');

  return (
    <div>
      <h1>Uploaded Video Preview</h1>
      {videoUrl && (
        <video controls width="800">
          <source src={decodeURIComponent(videoUrl)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Uploads;
