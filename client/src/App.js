import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PesuCoin from "./Pages/PesuCoin/pesucoin";
import Spaces from "./Pages/Spaces/spaces"
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/spaces" element={<Spaces />}></Route>
          <Route exact path="/pesucoin" element={<PesuCoin />}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;