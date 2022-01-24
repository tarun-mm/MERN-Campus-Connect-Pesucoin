var mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://admin:adminpass@cluster0.tbgwm.mongodb.net/campus_connect",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("Connection successful");
});

// User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);

// Clubs
const clubSchema = new mongoose.Schema({
  name: String,
  domain: String,
  desc: String
})
const Club = new mongoose.model("club", clubSchema);

// Spaces
const spaceSchema = new mongoose.Schema({
  space_name: String,
  venue: String,
  date: String,
  time: String,
});
const Space = new mongoose.model("spaces_data", spaceSchema);

// PesuCoin
const pesuCoinSchema = new mongoose.Schema({
  email: String,
  coins: Number,
  numOrders: Number,
});
const PesuCoin = new mongoose.model("coin", pesuCoinSchema);

// Transactions
const transactionSchema = new mongoose.Schema({
  email: String,
  coins: Number,
  orderNo: Number,
});
const Transaction = new mongoose.model("transaction", transactionSchema);

// Contact
const contactSchema = new mongoose.Schema({
  name: String,
  sem: String,
  email: String,
  query: String,
});
const Contact = new mongoose.model("contact", contactSchema);

const models = {};

models.User = User;
models.Club = Club;
models.Space = Space;
models.PesuCoin = PesuCoin;
models.Transaction = Transaction
models.Contact = Contact;

module.exports = models;