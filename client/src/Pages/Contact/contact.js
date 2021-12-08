import React from "react";
import NavBar from "../../Default/NavBar/navBar";
import "../../Default/CSS/theme.css"
class Contact extends React.Component{
    render(){
    return(
    <div>
    <title>Contact</title>
    <nav className="navbar">
        <NavBar />
    </nav>
    <section id="section" className="section">
    <div className="box-main">
    <div className="card">
  
    <h1 className="paraHeading">Contact Us:-</h1>
    <br/>
    <h2 className="paraText">Contact Number:-979786675656</h2>
    <h2 className="paraText">Email Address:-gg@gmail.com</h2>
    <br/>
    <p className="paraTextBold">Or else just drop your mail, we'll get back to you:) </p>
    <br/>
    <label className="paraText" htmlFor="name" >Name:</label>
    <input className="input" type="text" /><br/>
    <label className="paraText" htmlFor="sem" >Sem:&nbsp;&nbsp;</label>
    <input className="input" type="text" /><br />
    <label className="paraText">Email:</label>
    <input className="input" type="text" /><br/>
    <br />
    <input className="input" type="submit" className="button" />
  </div>
  </div>
  
  </section>
  </div>

    );
    }
}

export default Contact;