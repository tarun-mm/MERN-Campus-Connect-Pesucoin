import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios";
import baseUrl from "../../Default/url";

class Spaces extends React.Component {
  constructor() {
    super();
    this.state = {
      space_elems: [[], [], [],],
    };
  }

  componentDidMount = () => {
    axios.post(baseUrl+"/spaces").then((res) => {
      // console.log(res.data.spaces)
      this.setState({
        space_elems: res.data.spaces,
      });
    });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar userLoggedIn={this.props.userLoggedIn} />
        </nav>
        <section id="section" className="section">
          <div
            className="box-main"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {this.state.space_elems &&
              this.state.space_elems.map((item, index) => {
                var marLeft = "1%";
                // console.log(index);
                return (
                  <>
                    <div
                      className="card"
                      key={item["_id"]}
                      style={{
                        width: "27%",
                        marginLeft: marLeft,
                        marginBottom: "1%",
                      }}
                    >
                      <span className="paraHeading">{item["space_name"]}</span>
                      <br />
                      <div style={{ height: "16px" }}></div>
                      <span className="paraTextBold">Venue:</span>&nbsp;&emsp;
                      <span className="paraText">{item["venue"]}</span>
                      <br />
                      <span className="paraTextBold">Date:</span>&emsp;&emsp;
                      <span className="paraText">{item["date"]}</span>
                      <br />
                      <span className="paraTextBold">Time:</span>&emsp;&emsp;
                      <span className="paraText">{item["time"]}</span>
                    </div>
                    <div style={{ height: "16px" }}></div>
                  </>
                );
              })}
          </div>
        </section>
      </>
    );
  }
}

export default Spaces;
