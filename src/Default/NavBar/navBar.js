import React from "react";
import logo from './logo.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navBar.css'

class NavBar extends React.Component {
  render() { 
    return(
      <ul className="nav-list">
        <div className="logo"><img src={ logo } alt="logo"/></div>
        <li><Link to='/'><p>Home</p></Link></li>
        <li><a href="#clubs">Clubs</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#issues">Issues</a></li>
        <li><a href="#spaces">Spaces</a></li>
        <li><Link to='/pesucoin'><p>PesuCoin</p></Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    );
  }
}
 
export default NavBar;