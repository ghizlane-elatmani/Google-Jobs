import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "@/components/layout/Navbar";
import Searchbar from "@/components/filter/Searchbar";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/filter/Filter";
import JobList from "@/components/jobs/JobList";
import Footer from "@/components/layout/Footer";

export default function Home({ jobStart }: any) {
  const [jobs, setJobs] = useState(jobStart);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("developer");
  const [location, setLocation] = useState("");
  const [type, setType] = useState(" ");

  useEffect(() => {
    // const key =
    //   "20b1ad2e0db19f5ff9797425a723fdad1f0c80d228fc43361f300e5dfa6e5836";
    // (async () => {
    //   const url = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&location=${location}&start=${page}&hl=en&api_key=${key}`;
    //   const result = await axios.get(url);
    //   const data = result.data;
    //   setJobs(data);
    // })();
  }, [query, location, page, type]);

  return (
    <Fragment>
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>

      <Navbar />
      <Searchbar setQuery={setQuery} />

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
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const url = `https://serpapi.com/search.json?engine=google_jobs&q=developer&hl=en&api_key=${process.env.API_KEY}`;

  const result = await axios.get(url);
  const data = result.data;
  //console.log("data", data);

  return {
    props: {
      jobStart: data,
    },
  };
}
