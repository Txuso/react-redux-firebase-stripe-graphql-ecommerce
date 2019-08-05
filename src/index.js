import "./index.css";

import { persistor, store } from "./redux/store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
