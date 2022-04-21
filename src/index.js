import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "mobx-react";
import TodoStore from "./stores/todo";

const todo = new TodoStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider todo={todo}>
    <App />
  </Provider>
);
