import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios";
import baseUrl from "../../Default/url";

class Clubs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      club_elems: [],
    };
  }

  componentDidMount = () => {
    axios.post(baseUrl+"/clubs").then((res) => {
      // console.log(res.data.clubs)
      this.setState({
        club_elems: res.data.clubs,
      });
    });
  };

  handleChange = (event) => {
    // console.log(event.target.value)
    // console.log(this.state.club_elems);
    this.setState({
      index: parseInt(event.target.value),
    });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar userLoggedIn={this.props.userLoggedIn} />
        </nav>
        <section id="section" className="section">
          <div className="box-main">
            <div className="card">
              <select
              className="paraTextBold selection"
                name="clubs"
                id="clubSelect"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                {this.state.club_elems &&
                  this.state.club_elems.map((item, index) => {
                    return (
                      <option className="paraText" key={index.toString()} value={index}>
                        {item["name"]}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div style={{ height: "32px" }}></div>

            <div className="card">
              {
                this.state.club_elems &&
                this.state.club_elems.map((item, index) => {
                  if(index === this.state.index) return (
                    <div key = {item["_id"]}>
                      <span className="paraHeading">{item["name"]}</span><br />
                      <div style={{ height: "16px" }}></div>
                      <span className="paraTextBold">Domain: </span>
                      <span className="paraText">{item["domain"]}</span><br />
                      <div style={{ height: "8px" }}></div>
                      <span className="paraTextBold">Description: </span><br />
                      <span className="paraText">{item["desc"]}</span>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Clubs;
