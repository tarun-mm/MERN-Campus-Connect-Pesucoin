import React from "react";
import "./home.css";
import http from "http";
import axios from "axios";
import NavBar from "../../Default/NavBar/navBar";

class Home extends React.Component {
  click = () => {
    axios({
      url: "http://localhost:8081/spaces.json",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

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
