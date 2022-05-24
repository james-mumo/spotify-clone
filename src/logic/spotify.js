//developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// this endpoint uses the spotify api to login
export const authEndPoint = "https://accounts.spotify.com/authorize";

// where to be taken after login with the api
const redirectUri = "http://localhost:3000";

// this is the client id after setting up the dev account
const clientID = "3b2d7b2acdd04e4393511139eda159a4";

// this gives the user some permissions to draw data and delete....its like giving persmission to modifyng spotify data...persmisions like lay a song and get some of infomation.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
];

//this grabs the token from the url
export const getTokenFromUrl = () => {
  // the hashtag after the localhost:3000/#(token)...we find the token and extract
  return (
    window.location.hash
      // after the "#" is the accesstoken
      // eg localhost:3000/#accessToken=mysuperToken1&name=james
      //what the code does is it finds the first spring before the '&'
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        // then we split at the '=' before the actual token
        let parts = item.split("=");
        // the we get part 0 which is the parts b4 the sign = equal and assign that value to the actual token which is the 'ysuperToken1
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
        // the empty obejct below siml states whta we should start with
      }, {})
  );
};

// the token at the end means that once u get authenticated u give the user a token back(a string repping the auth or prove u are authorized)

// csopes.join is as it is

// the show dialog is some of the rules u have to agree to use the the api

//readon this

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}%scope=&{scopes.join("%20")}&response_type=token&show_dialog=true`;
