import React from "react";
import logo from './logo.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navBar.css'

class NavBar extends React.Component {
  dropNav = () => {
    document.querySelector("nav").classList.toggle("nav-resp");
    var li = document.querySelectorAll("li p");
    for (var i = 0; i < li.length; i++) {
      li[i].classList.toggle("nav-list-resp");
    }
  };

  render() { 
    return(
      <>
        <ul className="nav-list">
          <div className="logo"><img src={ logo } alt="logo"/></div>
          <Link to='/home'><li><p className="nav-list-resp">Home</p></li></Link>
          <Link to='/home'><li><p className="nav-list-resp">Clubs</p></li></Link>
          <Link to='/home'><li><p className="nav-list-resp">Food</p></li></Link>
          <Link to='/home'><li><p className="nav-list-resp">Issues</p></li></Link>
          <Link to='/spaces'><li><p className="nav-list-resp">Spaces</p></li></Link>
          <Link to='/pesucoin'><li><p className="nav-list-resp">PesuCoin</p></li></Link>
          <Link to='/contact'><li><p className="nav-list-resp">Contact</p></li></Link>
        </ul>

        <div className="burger" onClick={this.dropNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </>
    );
  }
}
 
export default NavBar;