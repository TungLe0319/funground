import Script from "next/script.js";
import React from "react";
import Modal from "../components/Modal.js";
import Navbar from "../components/Navbar.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="index.min.js" />
      <Navbar />
      <Component {...pageProps} />
      {/* <Modal /> */}
    </>
  );
}

export default MyApp;
