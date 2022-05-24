import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./logic/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./dataLayer/DataLayer";

// it is an constructr becaise it creates an instance fo spotofy inside our app
const spotify = new SpotifyWebApi();

function App() {
  //
  const [{ token }, setToken] = useState(null);

  //to grab any from the data layer we use the useDatalayer which takes two things an object needed from the data and a dispathc method
  const [{ }, dispatch] = useDataLayerValue();
    //

    // this is useEffcet litsens to the chnages on the Tkoken received
    useEffect(() => {
      const hash = getTokenFromUrl();
      // for safety remove the token from the url with this code as the code below does
      window.location.hash = "";

      // the "getTokenFromUrl()" pulls an object as it is from the url and tgerefre to acces to a single element we do as follwos since it is an object
      const _token = hash.acces_token;

      // so this stores the accestoken in the setToen aftre stripping it from the url
      if (_token) {
        setToken(_token);

        // this line gives the acces token to the spotify api we created from sportifywebapi
        spotify.setAccessToke(_token);

        // to test use the following funtion of the api
        // to feth the user from the actla specify account
        spotify.getME().then((user) => {
          console.log("👴", user);
        });

        // the getMe promise above  should return an obvets instnace fo the user in the concole.log
      }

      // try chnaging this to _token
      console.log("i have a token now 👉", token);
    }, []);

  return (
    <div className="app">
      {/* spotify logo */}
      {/* login spotify button */}

      {
        // this is a jsx itenary operator
        token ? (
          <>
            (<h2>I am logged in</h2>
            <Player />)
          </>
        ) : (
          <Login />
        )
      }

      {/* the itenary operator aboev simpley means that [if there is a token, render player else render login] */}
    </div>
  );
}
export default App;
