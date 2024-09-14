import React from "react";
import lang from "../utils/LanguageContants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex items-center justify-center">
      <form className="pt-[10%]">
        <input
          type="text"
          className="px-4 py-2 rounded-md border-solid border-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-md ml-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
