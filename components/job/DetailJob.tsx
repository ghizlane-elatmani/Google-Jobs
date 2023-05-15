import React from "react";
import { BsClock, BsGlobeAmericas } from "react-icons/bs";

const DetailJob = ({ job }: any) => {
  console.log(job);
  return (
    <div className="text-blue-900 md:flex-1">
      {/* --- TITLE --- */}
      <div className="mb-2 flex items-center gap-5">
        <h1 className="text-lg font-bold">{job.title}</h1>
        {job.extensions[1] && (
          <p className="shrink-0 rounded-sm border border-blue-900 p-1 text-xs font-bold">
            {job.extensions[1]}
          </p>
        )}
      </div>

      {job.extensions[0] && (
        <p className="mb-10 flex items-center gap-2 text-xs text-neutral-400">
          <BsClock />
          {job.extensions[0]}
        </p>
      )}

      {/* --- CARD --- */}
      <div className="mb-10 flex gap-2">
        {job.thumbnail ? (
          <img
            className="h-[45px] w-[45px] bg-transparent object-scale-down"
            src={job.thumbnail}
            alt="/"
          />
        ) : (
          <div className="flex h-[45px] w-[45px] items-center justify-center bg-transparent">
            <p className="flex h-full w-full items-center justify-center rounded-sm bg-neutral-200 text-center text-[8px] font-bold text-neutral-400">
              not found
            </p>
          </div>
        )}

        <div>
          <p className="mb-2 text-base font-bold">{job.company_name}</p>
          <p className=" flex items-center gap-2 text-xs text-neutral-400">
            <BsGlobeAmericas />
            {job.location}
          </p>
        </div>
      </div>

      {/* --- DESCRIPTION --- */}
      <div>{job.description}</div>
    </div>
  );
};

export default DetailJob;
