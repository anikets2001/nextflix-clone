import React from "react";
import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[16rem] w-1/2 px-24 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="flex gap-2">
        <button className="text-black bg-white py-1 px-6 border-2 rounded-md flex items-center gap-2">
          <CiPlay1 /> Play
        </button>
        <button className="text-black bg-white py-1 px-6 border-2 rounded-md flex items-center gap-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;