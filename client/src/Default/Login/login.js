import React from "react";
import axios from "axios";

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    var { email, pass } = document.forms[0];
    console.log(email.value, pass.value);

    axios
      .post("http://localhost:5000/login", {
        email: email.value,
        password: pass.value,
      })
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.user);
        this.props.userLoggedIn(res.data.user.email)
      });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Email </label>
            <input type="email" name="email" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
