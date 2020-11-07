import Head from "next/head";
import Router from "next/router";
import Dashboard from "@components/Dashboard";
import Settings from "@components/Settings";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

export default function SettingsPage() {
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
      Router.reload("/");
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
    Router.reload("/");
  };

  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      {loggedIn && (
        <Dashboard user={user} logout={logout} activeLink="/settings">
          <Settings />
        </Dashboard>
      )}
    </div>
  );
}
