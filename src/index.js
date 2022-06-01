import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  // debugger;
  ReactDOM.render(
    <Provider store={store}>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />     
    </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
