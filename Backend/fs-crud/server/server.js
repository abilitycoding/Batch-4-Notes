const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
/* const MONGODB_URL =
  "mongodb+srv://tamilcodingacademy:QrKRodCVnZfggfdgKbcs9k@cluster0.nhkhoat.mongodb.net/"; */

const MONGODB_URL = "mongodb://localhost:27017";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

app.use(bodyParser.json());

/* Database Integration */

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "fs-crud"
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
  console.log("Database Connected...");
});

/* MongoDB Schema */

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    avatar: String
  },
  { timestamps: true }
);

const userModal = mongoose.model("user", userSchema);

app.post("/post", async (req, res) => {
  console.log(req.body);
  const postData = new userModal({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    avatar: req.body.avatar
  });
  await postData.save();
  console.log(postData);
  res.status(201).json({ message: "Data Received Success" });
});

app.get("/get", async (request, response) => {
  const dataFromBackend = await userModal.find();
  response
    .status(200)
    .json({ message: "Data Received Successfully", result: dataFromBackend });
});

app.put("/put", async (req, res) => {
  console.log(req.body);
  const user = await userModal.findByIdAndUpdate(
    req.body._id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      avatar: req.body.avatar
    },
    { new: true } // To return Updated Data
  );
  if (!user) {
    return res
      .status(200)
      .json({ message: "User Not Found!", UpdatedData: user });
  } else {
    return res
      .status(200)
      .json({ message: "Updated Successfully", UpdatedData: user });
  }
});

app.delete("/delete", async (req, res) => {
  console.log("Data from body", req.body._id);
  const user = await userModal.findByIdAndDelete(req.body._id);
  if (!user) {
    return res.status(200).json({ message: "User Not Found!" });
  } else {
    return res.status(200).json({ message: "Deleted Successfully" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
