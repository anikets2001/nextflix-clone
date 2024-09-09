import { useEffect, useState } from "react";
import { API_OPTIONS } from "../assets/utils/constants";

const useMovieTrailer = (id) => {
  const [trailerId, setTrailerId] = useState("");

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer?.key);
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return trailerId;
};

export default useMovieTrailer;
