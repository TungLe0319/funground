import Script from "next/script.js";
import React, { useState } from "react";
import Modal from "../components/Modal.js";
import Navbar from "../components/Navbar.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Script src="index.min.js" />
      <Navbar />
      <Component {...pageProps} />
      <Modal open={isOpen} />
    </>
  );
}

export default MyApp;
