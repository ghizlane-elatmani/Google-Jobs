import React from "react";
import { BsX } from "react-icons/bs";

const FilterApplied = ({
  query,
  location,
  setQuery,
  setLocation,
  type,
  setType,
}: any) => {
  return (
    <div className="border border-neutral-400 border-b-1 border-t-0 border-r-0 border-l-0 pb-5 mb-5">
      <h2 className="text-neutral-500 font-bold mb-2 ">Filters applied</h2>

      <div className="flex flex-wrap gap-2">
        {query ? (
          <div className="bg-blue-500 py-1 px-2 rounded-sm text-white flex items-center gap-2">
            {query}
            <BsX
              className="font-bold cursor-pointer"
              onClick={() => setQuery("")}
            />
          </div>
        ) : (
          ""
        )}

        {location ? (
          <div className="bg-blue-500 py-1 px-2 rounded-sm text-white flex items-center gap-2">
            {location}
            <BsX
              className="font-bold cursor-pointer"
              onClick={() => setLocation("")}
            />
          </div>
        ) : (
          ""
        )}

        {type !== " " ? (
          <div className="bg-blue-500 py-1 px-2 rounded-sm text-white flex items-center gap-2">
            {type}
            <BsX
              className="font-bold cursor-pointer"
              onClick={() => setType(" ")}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilterApplied;
