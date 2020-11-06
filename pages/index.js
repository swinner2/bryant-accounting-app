import Head from "next/head";
import Router from "next/router";
import Dashboard from "@components/Dashboard";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

export default function Home() {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
      if (!user) {
        console.log("not logged in");

        login();
      }
    });
  }, [loggedIn]);

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      Router.reload(window.location.pathname);
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
  };

  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      {loggedIn && <Dashboard user={user} logout={logout} />}
    </div>
  );
}
