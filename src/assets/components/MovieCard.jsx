import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div>
      <img src={IMG_CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
