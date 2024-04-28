import React from "react";
import play from "../assets/play-solid.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-black text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 hover:opacity-80 flex items-center">
          <img src={play} alt="play-icon" className="w-6 h-6 mr-4" />
          <span>Play</span>
        </button>
        <button className="bg-black text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
