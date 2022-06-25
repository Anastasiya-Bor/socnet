import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
// import { Provider }from "./StoreContext";

let rerenderEntireTree = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />     
      </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
