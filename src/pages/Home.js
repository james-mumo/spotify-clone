import React from "react";
import "./Home.css";
import "../components/Search";
import { Link } from "react-router-dom";
import Search from "../components/Search";
// import { Avatar } from "@material-ui/core";
// import { AppsIcon } from "@material-ui/icons/Apps";
//

//

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        {/*  */}
        <div className="home__headerLeft">
          {/* links on the header left */}
          <Link to="/about">this is about</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          {/* link on headrr right */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* Apps Icon */}
          {/* <AppsIcon /> */}
          {/* logged in  Icon */}
          {/* <Avatar /> */}
        </div>
      </div>

      <div className="home__body">
        {/* the image below is the Google Logo on the Hme page */}
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        {/* this is the search input
              it is created as a compnent so that it can be re-used  */}
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
