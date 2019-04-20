import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Room, RoomStore } from "./Room";
import NumberApp from "./number";

const App = () => (
  <div className="app">
    <Room />
  </div>
);

ReactDOM.render(<NumberApp />, document.querySelector("#root"));
