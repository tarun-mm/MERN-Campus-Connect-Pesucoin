import React from "react";
import "./home.css";
import NavBar from "../../Default/NavBar/navBar";

class Home extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section id="sectio" className="section">
          <div className="box-main">
            <div className="card">
              <div className="paraHeading">Pesucoin</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
