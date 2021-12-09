import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios"

class Contact extends React.Component {
  handleContactSubmit = (event) => {
    event.preventDefault()
    var { name, sem, email, query } = document.forms[0]
    // console.log(name.value, sem.value, email.value)

    axios.post("http://localhost:5000/contact", {
      name: name.value,
      sem: sem.value,
      email: email.value,
      query: query.value
    }).then((res) => {
      alert(res.data.message);
      document.getElementById("contactForm").reset()
    });
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar userLoggedIn={this.props.userLoggedIn} />
        </nav>
        <section id="section" className="section">
          <div className="box-main">
            <div className="card">
              <span className="paraHeading">Contact Us</span>
              <br />
              <span style={{ height: "16px" }}></span>
              <br />
              <span className="paraTextBold">Contact Number: &emsp;</span>
              <span className="paraText">979786675656</span>
              <br />
              <span className="paraTextBold">Email Address: &emsp;&emsp;&nbsp;</span>
              <span className="paraText">gg@gmail.com</span>
              <br />
              <span className="paraTextBold">Or else just drop your mail, we'll get back to you:){" "}</span>
              <br />
              <span style={{ height: "16px" }}></span>
              <br />
              
              <form id="contactForm" onSubmit={this.handleContactSubmit}>
                <label className="paraTextBold" htmlFor="name">Name</label>
                <input className="input" type="text" name="name" />
                <br />

                <label className="paraTextBold" htmlFor="sem">Sem</label>
                <input className="input" type="text" name="sem" />
                <br />

                <label className="paraTextBold">Email</label>
                <input className="input" type="email" name="email" required/>
                <br />

                <label className="paraTextBold">Query</label>
                <textarea className="input" type="text" name="query" required/>
                <br />
                
                <input className="input" type="submit" className="button" />
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
