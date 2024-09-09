import React from "react";
import useMovieTrailer from "../../CustomHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerId = useMovieTrailer(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-[calc(100vh-100px)]"
        src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
