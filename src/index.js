import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css";

import { MyContext } from "./context";

ReactDOM.render(
  <MyContext>
    <TodoContainer />
  </MyContext>,
  document.getElementById("root")
);
