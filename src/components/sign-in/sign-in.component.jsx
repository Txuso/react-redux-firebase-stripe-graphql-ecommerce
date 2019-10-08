import './sign-in.component.scss';

import React, { useState } from 'react';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;
	const handleSubmit = async (event) => {
		event.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput name="email" type="email" label="email" value={email} handleChange={handleChange} required />

				<FormInput
					name="password"
					type="password"
					label="password"
					value={password}
					required
					handleChange={handleChange}
				/>
				<div className="sign-in-buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={googleSignInStart} isGoogleSignIn type="button">
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
});
export default connect(null, mapDispatchToProps)(SignIn);
