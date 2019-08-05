import "./App.css";
import "./pages/homepage/homepage.styles.scss";

import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { connect } from "react-redux";
import { setCurrenUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrenUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrenUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrenUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrenUser: user => dispatch(setCurrenUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);
