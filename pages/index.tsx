import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Searchbar from "@/components/filter/Searchbar";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/filter/Filter";
import JobList from "@/components/jobs/JobList";

export default function Home() {
  return (
    <Fragment>
      {/* ===== HEAD ===== */}
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>

      {/* ===== NAVBAR & SEARCH BAR ===== */}
      <Navbar />
      <Searchbar />

      {/* ===== FILTER ===== */}
      <Layout>
        <Filter />
        <JobList />
      </Layout>
    </Fragment>
  );
}
