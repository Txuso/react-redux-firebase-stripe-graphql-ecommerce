import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';

import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
	checkUserSession: (user) => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
