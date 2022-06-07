import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import StoreContext from "./StoreContext";

let rerenderEntireTree = (state) => {
  // debugger;
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      {/* <Provider store={store}> */}
        <App />     
      {/* </Provider>, */}
    </StoreContext.Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
