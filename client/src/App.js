import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Clubs from "./Pages/Clubs/clubs";
import Contact from "./Pages/Contact/contact";
import Food from "./Pages/Food/food";
import Home from "./Pages/Home/home";
import Login from "./Default/Login/login";
import PesuCoin from "./Pages/PesuCoin/pesucoin";
import React from "react";
import Spaces from "./Pages/Spaces/spaces";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      name: "",
      email: ""
    };
  }

  userLoggedIn = (name, email) => {
    console.log(name)
    console.log(email)
    if (email === "") {
      this.setState({
        loggedIn: false,
        name: name,
        email: email
      });
    } else {
      this.setState({
        loggedIn: true,
        name: name,
        email: email
      });
    }
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={this.state.loggedIn ? <Home userLoggedIn={this.userLoggedIn} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
          <Route exact path="/clubs" element={this.state.loggedIn ? <Clubs userLoggedIn={this.userLoggedIn} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
          <Route exact path="/food" element={this.state.loggedIn ? <Food userLoggedIn={this.userLoggedIn} userEmail={this.state.email} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
          <Route exact path="/spaces" element={this.state.loggedIn ? <Spaces userLoggedIn={this.userLoggedIn} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
          <Route exact path="/pesucoin" element={this.state.loggedIn ? <PesuCoin userName={this.state.name} userEmail={this.state.email} userLoggedIn={this.userLoggedIn} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
          <Route exact path="/contact" element={this.state.loggedIn ? <Contact userLoggedIn={this.userLoggedIn} /> : <Login userLoggedIn={this.userLoggedIn} />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
