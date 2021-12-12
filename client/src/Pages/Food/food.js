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
                <label className="paraTextBold">Margherita &nbsp;</label>
                <input type="checkbox" name="item1" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Formaggio &nbsp;</label>
                <input type="checkbox" name="item2" value="27" />
                <br />
                <span className="paraText">Amt: 27 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Chicken &nbsp;</label>
                <input type="checkbox" name="item3" value="25" />
                <br />
                <span className="paraText">Amt: 25 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Pineapple'o'clock &nbsp;</label>
                <input type="checkbox" name="item4" value="30" />
                <br />
                <span className="paraText">Amt: 30 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Meat Town Hot! &nbsp;</label>
                <input type="checkbox" name="item5" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Lasagna Popular &nbsp;</label>
                <input type="checkbox" name="item6" value="40" />
                <br />
                <span className="paraText">Amt: 40 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Ravioli &nbsp;</label>
                <input type="checkbox" name="item7" value="55" />
                <br />
                <span className="paraText">Amt: 55 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">
                  Spaghetti Classica &nbsp;
                </label>
                <input type="checkbox" name="item8" value="25" />
                <br />
                <span className="paraText">Amt: 25 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">
                  Today's Soup Seasonal &nbsp;
                </label>
                <input type="checkbox" name="item9" value="35" />
                <br />
                <span className="paraText">Amt: 35 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>
            </div>

            <div className="box-main">
              <div className="card">
                <label className="paraTextBold">Bruschetta &nbsp;</label>
                <input type="checkbox" name="item10" value="55" />
                <br />
                <span className="paraText">Amt: 55 PesuCoin</span>
                <span className="checkmark" />
              </div>
              <div style={{ height: "8px" }}></div>

              <div className="card">
                <label className="paraTextBold">Garlic bread &nbsp;</label>
                <input type="checkbox" name="item11" value="65" />
                <br />
                <span className="paraText">Amt: 65 PesuCoin</span>
                <span className="checkmark" />
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
