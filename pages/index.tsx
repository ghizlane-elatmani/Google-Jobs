import { Fragment } from "react";
import Head from "next/head";

import { getJson } from "serpapi";

import Navbar from "@/components/layout/Navbar";
import Searchbar from "@/components/filter/Searchbar";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/filter/Filter";
import JobList from "@/components/jobs/JobList";

export default function Home({ jobs }: any) {
  return (
    <Fragment>
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>

      <Navbar />
      <Searchbar />

      <Layout>
        <Filter />
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
      jobs: response,
    },
  };
}
