import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/campus_connect",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

// User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);

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
  coins: Number
})
const PesuCoin = new mongoose.model("pesucoin", pesuCoinSchema);

// Contact
const contactSchema = new mongoose.Schema({
  name: String,
  sem: String,
  email: String,
  query: String
});
const Contact = new mongoose.model("contact", contactSchema);

// Routes

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  var coins = 0
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password
      });
      user.save((err) => {
        if (err) res.send(err);
        else {
          const pesuCoin = new PesuCoin({
            email,
            coins
          })
          pesuCoin.save((err) =>{
            if(err) res.send(err)
            else {
              res.send({ message: "Successfully Registered, Please login now." });
            }
          })
        }
      });
    }
  });
});

app.post("/spaces", (req, res) => {
  Space.find({}, (err, docs) => {
    // console.log(docs)
    if (err) console.log(err);
    else res.send({ spaces: docs });
  });
});

app.post("/pesucoin", (req, res) => {
  const { email } = req.body;
  PesuCoin.findOne({ email: email }, (err, user) => {
    // console.log(user)
    // console.log(typeof(user))
    if (user) res.send({ message: "PesuCoin connected", coins: user["coins"] })
    else res.send({ message: "User not existing" })
  })
})

app.post("/contact", (req, res) => {
  const { name, sem, email, query } = req.body;

  const contact = new Contact({
    name,
    sem,
    email,
    query
  });
  contact.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Your Query has been submitted" });
    }
  });
});

app.listen(5000, () => {
  console.log("BE started at port 5000");
});
