import React from "react";
import { BiBriefcaseAlt } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div
      className=" max-w-5xl m-auto p-4 md:py-7 rounded-lg"
      style={{
        backgroundImage: `url(/images/backgroundImg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form className=" max-w-3xl m-auto p-2 flex gap-2 justify-between">
        <div className="bg-blue-50 w-full px-2 flex items-center gap-1 rounded-sm">
          <BiBriefcaseAlt />
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            className="w-full bg-blue-50 outline-none text-xs sm:text-base"
          />
        </div>
        <button className="bg-blue-600 text-blue-50 px-6 py-2 rounded-sm text-xs sm:text-base">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
