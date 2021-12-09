import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";

class Food extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <NavBar />
        </nav>
        
        <section id="section" className="sectionregister">
        <br/>
        <br/>
        <h1 className="paraHeadingLight">
          Book your meal now
        </h1>
        
        <div style={{ margin: "40px" }}>
          <div className="box-main">
            <div className="card">
              <label className="paraTextBold">
                Margherita &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-35 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Formaggio &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:27 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Chicken &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:- 25 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
          </div>

          <div className="box-main">
            <div className="card">
              <label className="paraTextBold">
                Pineapple'o'clock &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-30 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Meat Town Hot! &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-35 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Lasagna Popular &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-40 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
          </div>

          <div className="box-main">
            <div className="card">
              <label className="paraTextBold">
                Ravioli &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-55 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Spaghetti Classica &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-25 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Today's Soup Seasonal &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-35 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
          </div>

          <div className="box-main">
            <div className="card">
              <label className="paraTextBold">
                Bruschetta &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-55 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
            <div className="card">
              <label className="paraTextBold">
                Garlic bread &nbsp; 
                <input type="checkbox" defaultChecked="checked" />
                <br/><span className="paraText">Amt:-65 pesucoins</span>
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>

        <a href="#" className="buttonLight" style={{ marginLeft: "500px" }}>
          Submit
        </a>
      </section>
      </div>
     
    );
  }
}
export default Food;
