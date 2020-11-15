import "../styles/tailwind.css";
import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

export default function MyApp({ Component, pageProps }) {
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
    <Component {...pageProps} login={login} user={user} loggedIn={loggedIn} />
  );
}
