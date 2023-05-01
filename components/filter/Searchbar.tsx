import React from "react";
import { BiBriefcaseAlt } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div
      className="max-w-5xl m-auto p-4 md:py-7 rounded-lg mb-5"
      style={{
        backgroundImage: `url(/images/backgroundImg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form className="bg-blue-50 max-w-3xl m-auto p-1 flex gap-2 justify-between rounded-sm">
        <div className="bg-blue-50 w-full px-2 flex items-center gap-2 rounded-sm">
          <BiBriefcaseAlt className="text-neutral-400" />
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            className="w-full bg-blue-50 outline-none text-xs sm:text-sm placeholder:text-neutral-400"
          />
        </div>
        <button className="bg-blue-600 text-blue-50 px-6 md:px-10 py-2 rounded-sm text-xs sm:text-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
