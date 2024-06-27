import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Companies from "./Companies";
import Work from "./Work";
import Clients from "./Clients";
import Writing from "./Writing";
import Footer from "./Footer";

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
