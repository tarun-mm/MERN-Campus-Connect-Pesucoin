import React from "react";
import axios from "axios";
import baseUrl from "../url";

class Login extends React.Component {
  handleLogin = (event) => {
    event.preventDefault();
    var { email, pass } = document.forms[0];
    // console.log(email.value, pass.value);

    axios
      .post(baseUrl+"/login", {
        email: email.value,
        password: pass.value,
      })
      .then((res) => {
        // console.log(res.data.message);
        // console.log(res.data.user);
        if (res.data.message === "Login Successful") {
          this.props.userLoggedIn(res.data.user.name, res.data.user.email);
        } else {
          alert(res.data.message);
        }
      });
  };

  handleRegister = (event) => {
    event.preventDefault();
    var { name, email, password, reEnterPassword } = document.forms[1];
    // console.log(name.value, email.value, password.value, reEnterPassword.value)

    if (
      name.value &&
      email.value &&
      password.value &&
      password.value === reEnterPassword.value
    ) {
      axios
        .post(baseUrl+"/register", {
          name: name.value,
          email: email.value,
          password: password.value,
          reEnterPassword: reEnterPassword.value,
        })
        .then((res) => {
          alert(res.data.message);
          document.getElementById("registerForm").reset();
        });
    } else {
      alert("Invlid input");
    }
  };

  render() {
    return (
      <>
        <section id="section" className="sectionregister">
          <div className="box-main">
            <div className="card">
              <div className="form">
                <h1 className="paraHeading">Login</h1>
                <br />
                <form id="loginForm" onSubmit={ this.handleLogin }>
                  <div className="input-container">
                    <label className="paraTextBold">Email </label>
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label className="paraTextBold">Password </label>
                    <input
                      className="input"
                      type="password"
                      name="pass"
                      required
                    />
                  </div>
                  <div className="button-container">
                    <input className="button paraText" type="submit" value="Login" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="box-main">
            <div className="card">
              <div className="form">
                <h1 className="paraHeading">Register</h1>
                <br />
                <form id="registerForm" onSubmit={this.handleRegister}>
                  <div className="input-container">
                    <label className="paraTextBold">Your Name </label>
                    <input className="input" type="text" name="name" required />
                  </div>
                  <div className="input-container">
                    <label className="paraTextBold">Email </label>
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label className="paraTextBold">Password </label>
                    <input
                      className="input"
                      type="password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label className="paraTextBold">Re-Enter Password </label>
                    <input
                      className="input"
                      type="password"
                      name="reEnterPassword"
                      required
                    />
                  </div>
                  <div className="button-container">
                    <input className="button paraText" type="submit" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
