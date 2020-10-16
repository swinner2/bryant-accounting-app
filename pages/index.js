import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Dashboard from "@components/Dashboard";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

export default function Home() {
  let [user, setUser] = useState(null);
  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
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
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      {loggedIn ? <Dashboard /> : login()}
    </div>
  );
}
