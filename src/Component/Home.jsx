import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Companies from "./Companies";
import Work from "./Work";
import Clients from "./Clients";
import Writing from "./Writing";
import Footer from "./Footer";
import "../app/globals.css";
const home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <Work />
      <Clients />
      <Writing />
      <Footer />
    </>
  );
};

export default home;
