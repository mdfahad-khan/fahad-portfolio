import React, { useState } from 'react';
// import image from '/video1.jpeg';
import videoThumbnail from '/video1.jpg';
import playIcon from '/video.svg';
import closeIcon from '/close.svg'; // Import your close icon

const Video = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const [showInterface, setShowInterface] = useState(true);

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
    setShowInterface(false);
  };

  const handleCloseButtonClick = () => {
    console.log("close button clicked");
    setVideoPlaying(false);
    setShowInterface(true);
  };

  return (
    <div className="relative">
      {/* Logo */}
      {/* <div className="absolute top-0 left-0 p-4">
        <img src={image} alt="Logo" className="w-12 h-12" />
      </div> */}

      {/* Video Player */}
      <div className="absolute inset-0 flex">
        {isVideoPlaying ? (
          <>
            <div className="absolute top-0 right-0 p-4">
            <button
  onClick={handleCloseButtonClick}
  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
  tabIndex="0"
>
  <img src={closeIcon} alt="Close Icon" className="w-6 h-6 mt-4 mr-5" />
</button>

</div>
            <video
              className="w-full h-screen object-cover cursor-pointer"
              controls
              poster={image}
              autoPlay
              playsInline
              muted
            >
              <source src="/fahad.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <img
            src={videoThumbnail}
            alt="Video Thumbnail"
            className="lg:w-full w-[500px] h-screen object-cover cursor-pointer"
            onClick={handlePlayButtonClick}
          />
        )}
      </div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center mt-40 text-white">
        {showInterface ? (
          <>
            <img src={playIcon} alt="Play Icon" className="w-32 h-32 mb-5" />

            <h1 className="lg:text-[80px] text-3xl font-extrabold mb-8 text-[#013550]">Fahad Blog</h1>
            <p className="lg:text-4xl text-2xl mb-8 text-gray-700">A brief description of my blog</p>
            <div className="button-with-shadows">
              <button
                className="border w-48 h-12 mt-5 bg-gray-800 text-white text-xl hover:bg-transparent hover:text-black shadow-red-and-blue hover:text-xl hover:font-extrabold"
                onClick={handlePlayButtonClick}
              >
                Watch Video
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Video;
