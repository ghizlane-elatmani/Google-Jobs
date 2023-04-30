import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import BackgroundImage from "../public/images/backgroundImg.png";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Google Jobs | Search for your dream job</title>
      </Head>
      <Navbar />
      <Searchbar />
    </Fragment>
  );
}
