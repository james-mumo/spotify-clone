import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";
import { DataLayer } from "./dataLayer/DataLayer";
import reducer, {initialState} from './dataLayer/reducer'

ReactDOM.render(
  <React.StrictMode>
    {/* the app is being wrapped in a data layer or a stateprovider which takes two things, an initial state and a reducer */}
    {/* The initial state refres to the the way the data layer is before it is intercated with....more explained n the reducer.js file */}
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
