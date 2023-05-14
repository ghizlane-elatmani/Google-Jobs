import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { Fragment } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/job/Sidebar";
import DetailJob from "@/components/job/DetailJob";

export default function Job() {
  const router = useRouter();
  const job = router.query;

  return (
    <Fragment>
      <Navbar />
      <Layout>
        <Sidebar apply={job.via} />
        <DetailJob job={job} />
      </Layout>
    </Fragment>
  );
}
