import React from "react";
import {render} from "react-dom";
import App from "./container/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById("root"));