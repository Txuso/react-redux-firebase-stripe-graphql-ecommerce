import "./App.css";
import "./pages/homepage/homepage.styles.scss";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
