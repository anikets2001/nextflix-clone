import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import useMovieTrailer from "../../CustomHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerId = useMovieTrailer(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
