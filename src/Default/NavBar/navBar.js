import React from "react";
import logo from './logo.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navBar.css'

class NavBar extends React.Component {
  render() { 
    return(
      <>
        <ul className="nav-list">
          <div className="logo"><img src={ logo } alt="logo"/></div>
          <Link to='/'><li><p className="nav-list-resp">Home</p></li></Link>
          <Link to='/'><li><p className="nav-list-resp">Clubs</p></li></Link>
          <Link to='/'><li><p className="nav-list-resp">Food</p></li></Link>
          <Link to='/'><li><p className="nav-list-resp">Issues</p></li></Link>
          <Link to='/'><li><p className="nav-list-resp">Spaces</p></li></Link>
          <Link to='/pesucoin'><li><p className="nav-list-resp">PesuCoin</p></li></Link>
          <Link to='/'><li><p className="nav-list-resp">Contact</p></li></Link>
        </ul>

        <div className="burger" onClick={this.props.dropNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </>
    );
  }
}
 
export default NavBar;