import "./sign-in.component.scss";

import FormInput from "../form-input/form-input.component";
import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <label>Password</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignIn;
