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
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData);

    setLocation(entries.inputLocation);
  };

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
      <div className="border-b-1 mb-5 border border-l-0 border-r-0 border-t-0 border-neutral-300 pb-5">
        <h2 className="mb-2 font-bold text-neutral-500 ">Type</h2>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setType(" ")}
            className={`flex cursor-pointer items-center gap-2 rounded-sm border border-blue-500 px-2 py-1 text-sm ${
              type === " "
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            }`}
          >
            Everything
          </button>

          <button
            onClick={() => setType("full time")}
            className={`flex cursor-pointer items-center gap-2 rounded-sm border border-blue-500 px-2 py-1 text-sm ${
              type === "full time"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500 "
            }`}
          >
            Full Time
          </button>

          <button
            onClick={() => setType("part time")}
            className={`flex cursor-pointer items-center gap-2 rounded-sm border border-blue-500 px-2 py-1 text-sm ${
              type === "part time"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            }`}
          >
            Part Time
          </button>
        </div>
      </div>

      {/* ===== LOCATION ===== */}
      <div className=" pb-5">
        <h2 className="mb-2 font-bold text-neutral-500">Location</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className=" border border-gray-300 bg-white p-1">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="flex flex-1 items-center gap-2 ">
                <BsGlobeAmericas className="text-neutral-400" />
                <input
                  type="text"
                  name="inputLocation"
                  className="w-full rounded-sm text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                  placeholder="City, state, zip code or country"
                />
              </div>
              <button
                type="submit"
                className="rounded-sm bg-blue-500 p-1 px-2 text-sm text-white hover:bg-blue-600"
              >
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
              } flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm`}
            >
              Paris
            </button>
            <button
              onClick={() => setLocation("london")}
              className={`border border-blue-500 ${
                location === "london"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500"
              } flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm`}
            >
              London
            </button>
            <button
              onClick={() => setLocation("new york")}
              className={`border border-blue-500 ${
                location === "new york"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500"
              } flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm`}
            >
              New York
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
