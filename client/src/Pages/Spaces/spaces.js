import React from "react";
import NavBar from "../../Default/NavBar/navBar";
import axios from "axios"
import "../../Default/CSS/theme.css"

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
                return ( <>
                  <div className="card" key={item["_id"]} style={{width: "27%", marginLeft: marLeft, marginBottom: "1%"}}>
                    <div className="paraHeading">{item["space_name"]}</div>
                    <div className="paraText">{item["venue"]}</div>
                    <div className="paraText">{item["date"]}</div>
                    <div className="paraText">{item["time"]}</div>
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
