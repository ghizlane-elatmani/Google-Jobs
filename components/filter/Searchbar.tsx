import React from "react";
import { BiBriefcaseAlt } from "react-icons/bi";

const Searchbar = ({ setQuery }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData);

    setQuery(entries.inputQuery);
  };

  return (
    <div
      className="m-auto mb-5 max-w-5xl rounded-lg p-4 md:py-7"
      style={{
        backgroundImage: `url(/images/backgroundImg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="m-auto flex max-w-3xl justify-between gap-2 rounded-sm bg-white p-1"
      >
        <div className="flex w-full items-center gap-2 rounded-sm bg-white px-2">
          <BiBriefcaseAlt className="text-neutral-400" />
          <input
            type="text"
            name="inputQuery"
            placeholder="Title, companies, expertise or benefits"
            className="w-full bg-white text-xs text-slate-800 outline-none placeholder:text-neutral-400 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-blue-600 px-6 py-2 text-xs text-white sm:text-sm md:px-10"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
