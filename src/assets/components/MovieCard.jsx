import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="shrink-0">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="poster"
        className="h-48 w-36 object-cover"
      />
    </div>
  );
};

export default MovieCard;
