import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Dashboard from "@components/Dashboard";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";
import netlifyIdentity from "netlify-identity-widget";

export default function Home() {
  let [user, setUser] = useState(null);
  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  };

  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
    });
  }, [loggedIn]);

  return (
    <div className="container">
      {/* <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head> */}

      {netlifyIdentity.open()}
    </div>
  );
}
