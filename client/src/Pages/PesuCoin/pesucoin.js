import React from "react";
import NavBar from "../../Default/NavBar/navBar";
import "./pesucoin.css";

class PesuCoin extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section id="section" className="section">
          <div className="box-main">
            <div className="card">
              <div className="paraHeading">What is PesuCoin?</div>
              <div style={{ height: "16px" }}></div>
              <div className="paraText">
                PesuCoin is the way of payment in the future and should be adopted
                everywhere. I don't know what im saying typing some stuff.
                PesuCoin is the way of payment in the future and should be adopted
                everywhere. I don't know what im saying typing some stuff.
                PesuCoin is the way of payment in the future and should be adopted
                everywhere. I don't know what im saying typing some stuff.
                PesuCoin is the way of payment in the future and should be adopted
                everywhere. I don't know what im saying typing some stuff.
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PesuCoin;
