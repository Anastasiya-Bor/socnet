// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import {addPost} from "./redux/state";
import { rerenderEntireTree } from "./render";
import state from "./redux/state";

rerenderEntireTree(state);
