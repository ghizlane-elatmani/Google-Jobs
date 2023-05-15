import React from "react";
import Pagination from "../layout/Pagination";
import JobItem from "./JobItem";

const JobList = ({ jobs }: any) => {
  return (
    <div className="md:flex-1">
      <ul className="mb-5 flex flex-col gap-3">
        {jobs.jobs_results.map((job: any) => (
          <JobItem key={job.job_id} job={job} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};

export default JobList;
