import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios";
import logo from "./coin.svg";

class PesuCoin extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userCoins: 0,
      transactions: [],
    };
  }

  componentDidMount = () => {
    axios
      .post("http://localhost:5000/pesucoin", {
        email: this.props.userEmail,
      })
      .then((res) => {
        // console.log(res.data.coins)
        this.setState({
          userCoins: res.data.coins,
        });
      });

    axios
      .post("http://localhost:5000/transactions/get", {
        email: this.props.userEmail,
      })
      .then((res) => {
        console.log(res.data.transactions);
        this.setState({
          transactions: res.data.transactions.reverse(),
        });
      });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section id="section" className="sectionregister">
          <div className="box-main">
            <div className="card">
              <span className="paraHeading">Hello {this.props.userName},</span>
              <div style={{ height: "16px" }}></div>
              <img src={logo} alt="logo" style={{ width: "64px" }} />
              <span>&emsp;&emsp;</span>
              <span className="paraTextBold">Wallet: </span>
              <span className="paraText">{this.state.userCoins}</span>
              <span className="paraText"> PesuCoin</span>
            </div>

            <div style={{ height: "16px" }}></div>

            <div className="card">
              <span className="paraHeading">Transactions</span>
              {this.state.transactions &&
                this.state.transactions.map((item, index) => {
                  return (
                    <div key={item["_id"]}>
                      <div style={{ height: "16px" }}></div>
                      <span className="paraTextBold">Order Number:</span>&emsp;&emsp;&emsp;
                      <span className="paraText">{item["orderNo"]}</span>
                      <br />
                      <span className="paraTextBold">Coins Spent:</span>&emsp;&emsp;&emsp;&emsp;&nbsp;
                      <span className="paraText">{item["coins"]}</span>
                      <br />
                      <span className="paraTextBold">Order Id:</span>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                      <span className="paraText">{item["_id"]}</span>
                      <br />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PesuCoin;
