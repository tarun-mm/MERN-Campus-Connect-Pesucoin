import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PesuCoin from "./Pages/PesuCoin/pesucoin";
import Home from "./Pages/Home/home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/pesucoin" element={<PesuCoin />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;