import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import { getJson } from "serpapi";

import Navbar from "@/components/layout/Navbar";
import Searchbar from "@/components/filter/Searchbar";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/filter/Filter";
import JobList from "@/components/jobs/JobList";

export default function Home({ jobStart }: any) {
  const [jobs, setJobs] = useState(jobStart);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("developer web");
  const [location, setLocation] = useState("paris");
  const [type, setType] = useState(" ");

  return (
    <Fragment>
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>

      <Navbar />
      <Searchbar query={query} setQuery={setQuery} />

      <Layout>
        <Filter
          query={query}
          setQuery={setQuery}
          location={location}
          setLocation={setLocation}
          type={type}
          setType={setType}
        />
        <JobList jobs={jobs} />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const params = {
    q: "developer web",
    hl: "en",
    api_key: process.env.API_KEY,
  };

  const response = await getJson("google_jobs", params);

  return {
    props: {
      jobStart: response,
    },
  };
}
