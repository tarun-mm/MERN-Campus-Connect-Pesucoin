import React from "react";
import axios from "axios";

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    console.log(uname.value, pass.value);

    axios({
      url: "http://127.0.0.1:5000/auth.json",
      mode: 'no-cors',
      data: JSON.stringify({
        username: "PES1UG20CS001",
        password: "PES1UG20CS001",
      }),
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        mode: "cors"
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
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
