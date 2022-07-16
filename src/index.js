//on cli enter export NODE_OPTIONS=--openssl-legacy-provider to reslove
//  -- Error: error:0308010C:digital envelope routines::unsupported

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
