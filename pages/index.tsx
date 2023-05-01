import { useState, Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Searchbar from "@/components/filter/Searchbar";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/filter/Filter";
import JobList from "@/components/jobs/JobList";
import axios from "axios";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const baseUrl = `https://serpapi.com/search.json?engine=google_jobs&q=${searchQuery}&google_domain=google.com&api_key=${process.env.API_KEY}`;

  return (
    <Fragment>
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>

      <Navbar />
      <Searchbar />

      <Layout>
        <Filter />
        <JobList />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const startupURL = `https://serpapi.com/search.json?engine=google_jobs&q=Developer&google_domain=google.com&api_key=${process.env.API_KEY}`;

  const response = await axios.get(startupURL);
  const data = await response.data;

  return {
    props: {
      jobs: data,
    },
  };
}
