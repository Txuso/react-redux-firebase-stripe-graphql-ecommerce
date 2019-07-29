import "./App.css";
import "./pages/homepage/homepage.styles.scss";

import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
