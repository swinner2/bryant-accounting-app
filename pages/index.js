import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Dashboard from "@components/Dashboard";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";
import { render } from "react-dom";
import React from "react";

class Home extends React.Component {
  componentDidMount() {
    netlifyAuth.initialize();
    if (true) {
      netlifyAuth.authenticate();
    }
  }

  render() {
    return (
      <div className="container">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        {/* {loggedIn ? <Dashboard />} */}
      </div>
    );
  }
}

export default Home;
