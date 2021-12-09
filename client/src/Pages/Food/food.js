import React from "react";
import NavBar from "../../Default/NavBar/navBar";
import "../../Default/CSS/theme.css"
class Food extends React.Component{
render()
{
return (
    <div>
    <nav className="navbar">
        <NavBar />
    </nav>
      <title>Clubs</title>
      <h1 style={{color: '#FFFFFF', textAlign: 'center'}}>Book your meal now</h1>	
      <div style={{margin: '60px'}}>
        <div className="box-main">
          <div className="card">
            <label className="paraTextBold">Margherita
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Formaggio
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Chicken
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="box-main">
          <div className="card">
            <label className="paraTextBold">Pineapple'o'clock
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Meat Town Hot!
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Lasagna Popular
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="box-main">
          <div className="card">
            <label className="paraTextBold">Ravioli
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Spaghetti Classica
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Today's Soup Seasonal
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="box-main">
          <div className="card">
            <label className="paraTextBold">Bruschetta
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="card">
            <label className="paraTextBold">Garlic bread
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
      <a href="#" className="button" style={{marginLeft: '700px'}}>Submit</a>
    </div>
  );
}
}
export default Food;