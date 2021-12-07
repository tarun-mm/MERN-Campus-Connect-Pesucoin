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
    var elems = []

    axios({
      url: "http://localhost:8081/spaces.json",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        for(var iterable = 0; iterable < res.data.length; iterable++){
          var temp = []
          temp.push(res.data[iterable]["_id"])
          temp.push(res.data[iterable]["space_name"])
          temp.push(res.data[iterable]["venue"])
          temp.push(res.data[iterable]["date"])
          temp.push(res.data[iterable]["time"])
          elems.push(temp)
        }
        // console.log(elems)

        this.setState({
          space_elems: res.data,
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
              // console.log(this.state.space_elems),
              this.state.space_elems &&
              this.state.space_elems.map((item, index) => {
                var marLeft = "1%"
                // if(index%3) marLeft = "2%"
                // console.log(item)
                console.log(index)
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
