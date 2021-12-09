import "../../Default/CSS/theme.css"

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios"

class Spaces extends React.Component {
  constructor(){
    super()
    this.state = {
      space_elems: [[10, 20, 30, 40, 50], [10, 20, 30, 40, 50], [10, 20, 30, 40, 50]]
    }
  }

  componentDidMount = () =>{
    axios.post("http://localhost:5000/spaces")
      .then((res) => {
        this.setState({
          space_elems: res.data.spaces,
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
          <div className="box-main" style={{display: "flex", flexWrap: "wrap"}}>
            {
              this.state.space_elems &&
              this.state.space_elems.map((item, index) => {
                var marLeft = "1%"
                console.log(index)
                return ( <>
                  <div className="card" key={item["_id"]} style={{width: "27%", marginLeft: marLeft, marginBottom: "1%"}}>
                    <span className="paraHeading">{item["space_name"]}</span><br/>
                    <span className="paraTextBold">Venue:</span>&nbsp;&emsp;<span className="paraText">{item["venue"]}</span><br/>
                    <span className="paraTextBold">Date:</span>&emsp;&emsp;<span className="paraText">{item["date"]}</span><br/>
                    <span className="paraTextBold">Time:</span>&emsp;&emsp;<span className="paraText">{item["time"]}</span>
                  </div>
                  <div style={{ height: "16px" }}></div>
                  </>
                )
              })
            }
          </div>
        </section>
      </>
    );
  }
}

export default Spaces;
