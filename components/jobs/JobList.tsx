import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs }: any) => {
  return (
    <div className="md:flex-1">
      <ul className="flex flex-col gap-3">
        {jobs.jobs_results.map((job: any) => (
          <JobItem key={job.job_id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
