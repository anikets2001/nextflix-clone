import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="pt-[10%]">
        <input
          type="text"
          className="px-4 py-2 rounded-md border-solid border-2"
          placeholder="what would you like to watch today?"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-md ml-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
