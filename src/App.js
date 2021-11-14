import React from 'react';
import './App.css';
import PesuCoin from './Pages/PesuCoin/pesucoin';
import NavBar from './Default/NavBar/navBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';

class App extends React.Component {
  render() { 
    return (
      <Router>
        <nav className="navbar">
          <NavBar/>
        </nav>
        <section id="section" className="section">
          <Routes>
            <Route exact path='/' element={ <Home /> }></Route>
            <Route exact path='/pesucoin' element={ <PesuCoin /> }></Route>
          </Routes>
        </section>
      </Router>
    );
  }
}
 
export default App;