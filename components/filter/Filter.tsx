import React from "react";
import FilterApplied from "./FilterApplied";
import { BsGlobeAmericas } from "react-icons/bs";

const Filter = ({
  query,
  location,
  setQuery,
  setLocation,
  type,
  setType,
}: any) => {
  return (
    <div className="md:w-[25%]">
      <FilterApplied
        query={query}
        setQuery={setQuery}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />

      {/* ===== TYPE ===== */}
      <div className="border border-neutral-300 border-b-1 border-t-0 border-r-0 border-l-0 pb-5 mb-5">
        <h2 className="text-neutral-500 font-bold mb-2 ">Type</h2>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setType(" ")}
            className={`border border-blue-500 py-1 px-2 rounded-sm text-sm cursor-pointer flex items-center gap-2 ${
              type === " "
                ? "bg-blue-500 text-white"
                : "text-blue-500 bg-transparent"
            }`}
          >
            Everything
          </button>

          <button
            onClick={() => setType("full time")}
            className={`border border-blue-500 py-1 px-2 text-sm rounded-sm cursor-pointer flex items-center gap-2 ${
              type === "full time"
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-transparent "
            }`}
          >
            Full Time
          </button>

          <button
            onClick={() => setType("part time")}
            className={`border border-blue-500 py-1 px-2 text-sm rounded-sm cursor-pointer flex items-center gap-2 ${
              type === "part time"
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-transparent"
            }`}
          >
            Part Time
          </button>
        </div>
      </div>

      {/* ===== LOCATION ===== */}
      <div className="pb-5 ">
        <h2 className="text-neutral-500 font-bold mb-2 ">Location</h2>

        <div className="mb-3 bg-white p-1 border border-gray-300">
          <form action="" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <BsGlobeAmericas className="text-neutral-400" />
              <input
                type="text"
                className="w-full text-sm rounded-sm outline-none placeholder:text-neutral-400 text-neutral-700"
                placeholder="City, state, zip code or country"
              />
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-sm p-1 px-2 hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>

        <div className="flex flex gap-2 [&>*]:max-w-max">
          <button
            onClick={() => setLocation("paris")}
            className={`border border-blue-500 ${
              location === "paris"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            } py-1 px-2 rounded-sm cursor-pointer flex items-center gap-2 text-sm`}
          >
            Paris
          </button>
          <button
            onClick={() => setLocation("london")}
            className={`border border-blue-500 ${
              location === "london"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            } py-1 px-2 rounded-sm cursor-pointer flex items-center gap-2 text-sm`}
          >
            London
          </button>
          <button
            onClick={() => setLocation("new york")}
            className={`border border-blue-500 ${
              location === "new york"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            } py-1 px-2 rounded-sm cursor-pointer flex items-center gap-2 text-sm`}
          >
            New York
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
