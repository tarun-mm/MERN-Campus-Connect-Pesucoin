import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <NavBar userLoggedIn={this.props.userLoggedIn} />
        </nav>
        <section id="section" className="sectionregister">
          <div className="box-main">
            <div className="card" onClick={this.click}>
              <h1 className="header">Welcome To Campus Connect</h1>
            </div>
            <br />
            <div className="card">
              <div className="paraHeading">
                We all needed a website that connects all of us as a
                university, didn't we?
                <br />
              </div>
              <br />
              <div className="paraText">
                Campus Connect is here for you,it brings all the facilities of
                the college at their fingertips.
                <br /> Clubs ,Food ,Spaces, Coins we have got it all covered for
                you. Take a seat back as we show you the outline of our website.
              </div>
            </div>
            <br />
            <div className="card">
              <span className="paraHeading">Our Pages</span>
              <br />
              <br />

              <span className="paraTextBold">Clubs</span>
              <br />
              <div className="paraText">
                Clubs excites us all and now we have got all of them under one
                roof, Clubs Page will help you find info about new clubs in our
                University. It gives the complete description of the club you
                are searching for.
              </div>
              <br />
              <span className="paraTextBold">Food</span>
              <br />
              <div className="paraText">
                Ever feeling Hungry? Food is just a click away now. You can go
                to the food page, browse through the wide variety of food items
                and order without any hassles. We'll make sure your food is
                ready
              </div>
              <br />
              <span className="paraTextBold">Spaces</span>
              <br />
              <div className="paraText">
                What's buzzing...we are all curious about what's happening
                around us. Through Spaces now you can know what the campus is
                discussing about. We have got a wide range of topics, know what
                venue and time the discussion will take place and just hop in.
              </div>
              <br />
              <span className="paraTextBold">Pesucoin</span>
              <br />
              <div className="paraText">
                We have saved the best for the last, with Campus Connect now we
                are introducing virtual currency to our campus. The whole world
                is shifting digital, why miss the bus.
                <br /> Pesucoin helps you keep track of the campus currency
                through a digital wallet and transactions too are stored so that
                you can always get back to the details
              </div>
              <br />
              <span className="paraTextBold">Contact</span>
              <br />
              <div className="paraText">
                If there's an issue with any of the pages, there's always a
                contact page where you can drop your query and we'll get back to
                you at the earliest.
              </div>
              <br />
            </div>
            <br />
            <div className="card">
              <div className="paraTextBold">
                We have got all this personalised for you, just for you. So why
                are you waiting, take a tour of the website now
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
