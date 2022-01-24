import "../../Default/CSS/theme.css";

import NavBar from "../../Default/NavBar/navBar";
import React from "react";
import axios from "axios";

class Food extends React.Component {
  handleBuy = (event) => {
    event.preventDefault();
    var price = 0;
    var elems = document.forms[0];

    for (var i = 0; i < elems.length - 1; i++) {
      price += elems[i].checked ? parseInt(elems[i].value) : 0;
    }

    // console.log(price)
    // console.log(typeof(price))

    axios
      .post("http://localhost:5000/pesucoin", {
        email: this.props.userEmail,
      })
      .then((res) => {
        if (price > res.data.coins) alert("You have run out of PesuCoins");
        else {
          // console.log(res.data)
          axios
            .post("http://localhost:5000/transactions/insert", {
              email: this.props.userEmail,
              coinsTot: parseInt(res.data.coins),
              coinsSpent: price,
              orderNo: parseInt(res.data.numOrders),
            })
            .then((ress) => {
              alert(ress.data.message)
            });
        }
      });
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <NavBar userLoggedIn={this.props.userLoggedIn} />
        </nav>

        <section id="section" className="sectionregister">
          <br />
          <br />
          <h1 className="paraHeadingLight">Book your meal now</h1>

          <form onSubmit={this.handleBuy}>
            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Idli Vada &nbsp;</label>
                <input type="checkbox" name="item1" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Masala Dosa &nbsp;</label>
                <input type="checkbox" name="item2" value="27" />
                <br />
                <span className="paraText">Amt: 27 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Fruit juice &nbsp;</label>
                <input type="checkbox" name="item3" value="25" />
                <br />
                <span className="paraText">Amt: 25 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Paneer Sandwich &nbsp;</label>
                <input type="checkbox" name="item4" value="30" />
                <br />
                <span className="paraText">Amt: 30 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Paneer Roll &nbsp;</label>
                <input type="checkbox" name="item5" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Veg Meals &nbsp;</label>
                <input type="checkbox" name="item6" value="40" />
                <br />
                <span className="paraText">Amt: 40 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Tandoori Chicken &nbsp;</label>
                <input type="checkbox" name="item7" value="55" />
                <br />
                <span className="paraText">Amt: 55 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">
                  Egg Roll &nbsp;
                </label>
                <input type="checkbox" name="item8" value="25" />
                <br />
                <span className="paraText">Amt: 25 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">
                  Day's Special &nbsp;
                </label>
                <input type="checkbox" name="item9" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Chicken Biryani &nbsp;</label>
                <input type="checkbox" name="item10" value="55" />
                <br />
                <span className="paraText">Amt: 55 PesuCoin</span>
                
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">PESU Special &nbsp;</label>
                <input type="checkbox" name="item11" value="65" />
                <br />
                <span className="paraText">Amt: 65 PesuCoin</span>
                
              </div>
              <div style={{ height: "64px" }}></div>

              <div>
                <input
                  className="buttonLight paraTextBold"
                  type="submit"
                  value="Buy"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Food;
