import React from "react";
import "./home.css";
import "../../Default/CSS/theme.css"
import NavBar from "../../Default/NavBar/navBar";

class Home extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section id="section" className="section">
          <div className="box-main">
            <div className="card" onClick={this.click}>
              <div className="paraHeading">Pesucoin</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
