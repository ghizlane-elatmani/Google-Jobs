import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";

const JobItem = ({ job }: any) => {
  return (
    <li className="flex gap-3 bg-white p-2 rounded-sm cursor-pointer text-blue-900 border border-gray-200 hover:border-gray-600">
      <img
        className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-slate-700"
        src={job.thumbnail}
        alt=""
      />
      <div className="flex-1 flex flex-col justify-between gap-2 sm:gap-0">
        <div>
          <p className="text-xs font-bold mb-2">{job.company_name}</p>
          <h2 className="text-sm sm:text-base">{job.title}</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-1">
          <p className="border border-blue-900 text-xs font-bold p-1 rounded-sm ">
            {job.detected_extensions.schedule_type}
          </p>

          <div className="flex gap-3 text-xs items-center text-gray-500">
            <p className="flex items-center gap-1">
              <BsGlobeAmericas />
              {job.location}
            </p>
            <p>{job.detected_extensions.posted_at}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
