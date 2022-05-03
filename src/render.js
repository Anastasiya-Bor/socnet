import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import state from "./redux/state";
import { addPost,  upDateNewPostText } from "./redux/state";



export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} upDateNewPostText={upDateNewPostText}/>,
    document.getElementById("root")
  );
};
