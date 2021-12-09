import "./pesucoin.css";
import "../../Default/CSS/theme.css"

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios";
import logo from "./coin.svg"

class PesuCoin extends React.Component {
  constructor(props){
    super()
    this.state = {
      userCoins: 0
    }    
  }

  componentDidMount = () => {
    axios.post("http://localhost:5000/pesucoin", {
      email: this.props.userEmail
    })
      .then((res) => {
        // console.log(res.data.coins)
        this.setState({
          userCoins: res.data.coins,
        })
      })
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section id="section" className="section">
          <div className="box-main">
            <div className="card" >
              <span className="paraHeading">Hello {this.props.userName},</span>
              <div style={{ height: "16px" }}></div>
              <img src={logo} alt="logo" style={{width: "64px"}} />
              <span >&emsp;&emsp;</span>
              <span className="paraTextBold">Wallet: </span>
              <span className="paraText">{this.state.userCoins}</span>
              <span className="paraText"> PesuCoin</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PesuCoin;
