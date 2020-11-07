import Head from "next/head";
import Router from "next/router";
import Dashboard from "@components/Dashboard";
import Settings from "@components/Settings";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

export default function Documents() {
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
        <Dashboard user={user} logout={logout} activeLink="/my_companies">
          <main
            className="flex-1 overflow-y-auto focus:outline-none"
            tabIndex="0"
          >
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
                    My Companies
                  </h1>
                </div>
              </div>
            </div>
          </main>
        </Dashboard>
      )}
    </div>
  );
}
