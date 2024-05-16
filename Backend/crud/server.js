const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

/* Database Integration */
const MONGODB_URL = "mongodb://localhost:27017";

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "crud"
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
  console.log("Database Connected...");
});

/* Schema */

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

/* Modal */

const Product = mongoose.model("Product", productSchema);

const User = mongoose.model("User", userSchema);

app.get("/user/get", async (req, res) => {
  const user = await User.find();
  return res.status(200).json(user);
});

app.get("/product/get", async (req, res) => {
  const product = await Product.find();
  return res.status(200).json(product);
});

app.post("/user/post", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber
  });
  console.log(user);
  await user.save();
  return res.status(201).json({ message: "User Created" });
});

app.post("/product/post", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity
  });
  console.log(product);
  await product.save();
  return res.status(201).json({ message: "Product Created" });
});

app.put("/user/put", async (req, res) => {
  const user = await User.findOne({ _id: req.body._id });
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.phoneNumber = req.body.phoneNumber;
  await user.save();
  return res.status(201).json({ message: "User Updated" });
});

app.put("/product/put", async (req, res) => {
  const product = await Product.findOne({ _id: req.body._id });
  product.name = req.body.name;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  await product.save();
  return res.status(201).json({ message: "Product Updated" });
});

app.delete("/product/delete", async (req, res) => {
  await Product.findByIdAndDelete(req.body._id);
  return res.status(201).json({ message: "Product Deleted" });
});

app.delete("/user/delete", async (req, res) => {
  await User.findByIdAndDelete(req.body._id);
  return res.status(201).json({ message: "User Deleted" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});