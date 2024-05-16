const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const MONGODB_URI = "mongodb://localhost:27017";
// const MONGODB_URI = "mongodb+srv://tamilcodingacademy:tamilcodingacademy@cluster0.nhkhoat.mongodb.net/";
/* Database Connection */
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "server-mdb"
});
// To check the database is connected to the backend
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));
/* Database Schema */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  profile: String,
  role: String
});
const User = mongoose.model("user", userSchema);
/* const defaultDatabase = {
  name: "sandy",
  email: "sandy@gmail.com",
  password: "12345",
  phone: "9489623700",
  profile:
    "https://lh3.googleusercontent.com/a/ACg8ocJ0nQdzLxkxIm06rrqzR0wVSmhv45F8_TdzJSLcuOyG5LHQ8lc=s288-c-no",
  role: "student"
}; */
app.get("/get", async (req, res) => {
  const data = await User.find();
  console.log(data);
  res.status(200).json({ message: "data returned", return: data });
});
app.post("/signup", async (req, res) => {
  //   console.log(req.body);
  const { name, email, password, phone, profile, role } = req.body;
  const postData = new User({
    name: name,
    email: email,
    password: password,
    phone: phone,
    profile: profile,
    role: role
  });
  //   console.log(postData);
  await postData.save();
  res.status(201).json({ message: "signup successful", return: req.body });
});

app.post("/signin", async (req, res) => {
  //   console.log(req.body);
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  if (password !== user.password) {
    return res.status(401).json({ error: "Invalid password" });
  }
  console.log(user);
  res.status(201).json({ message: "signin successful", return: req.body });
});
app.listen(5000, () => {
  console.log("server running on port 5000...");
});