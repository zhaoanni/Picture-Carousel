import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//imports for redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk"
import reducers from "./reducers"
import {createRoot} from "react-dom/client"
const reduxStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
   <Provider store={reduxStore}>
    <App />
   </Provider>,
  // document.getElementById("root")
);
