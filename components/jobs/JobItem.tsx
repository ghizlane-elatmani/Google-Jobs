import React from "react";
import Link from "next/link";
import { BsGlobeAmericas } from "react-icons/bs";

const JobItem = ({ job }: any) => {
  return (
    <Link href={{ pathname: `/job`, query: job }}>
      <li className="flex cursor-pointer gap-3 rounded-sm border border-gray-200 bg-white p-2 py-3 text-blue-900 hover:border-gray-600">
        {job.thumbnail ? (
          <img
            className="w-[75px] bg-transparent object-scale-down"
            src={job.thumbnail}
            alt="/"
          />
        ) : (
          <div className="flex w-[75px] items-center justify-center bg-transparent">
            <p className="flex h-full w-full items-center justify-center bg-neutral-100 text-center text-[9px] font-bold text-neutral-400">
              not found
            </p>
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between gap-2 sm:gap-0">
          <div className="mb-2">
            <p className="mb-2 text-xs font-bold">{job.company_name}</p>
            <h2 className="text-sm sm:text-base">{job.title}</h2>
          </div>

          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            {job.detected_extensions.schedule_type === "Full-time" ? (
              <p className="max-w-max rounded-sm border border-blue-900 p-1 text-xs font-bold">
                Full time
              </p>
            ) : (
              <p></p>
            )}

            <div className="flex items-center gap-3 text-xs text-gray-500">
              <p className="flex items-center gap-1">
                <BsGlobeAmericas />
                {job.location}
              </p>
              <p>{job.detected_extensions.posted_at}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default JobItem;
