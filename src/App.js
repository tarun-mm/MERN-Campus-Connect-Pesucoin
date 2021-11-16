import React from 'react';
import './App.css';
import PesuCoin from './Pages/PesuCoin/pesucoin';
import NavBar from './Default/NavBar/navBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';

class App extends React.Component {
  dropNav = () => {
    document.querySelector('nav').classList.toggle('nav-resp');
    var li = document.querySelectorAll('li p');
    for(var i = 0; i < li.length; i++){
      li[i].classList.toggle('nav-list-resp');
    }
  }

  render() { 
    return (
      <Router>
        <nav className="navbar">
          <NavBar dropNav={this.dropNav}/>
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