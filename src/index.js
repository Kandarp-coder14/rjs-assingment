import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Box from "./box.js";

function App() {
  return (
    <div>
      <Box />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
