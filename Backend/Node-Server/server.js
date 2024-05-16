const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
/* const MONGODB_URL =
  "mongodb+srv://tamilcodingacademy:QrKRodCVnZfggfdgKbcs9k@cluster0.nhkhoat.mongodb.net/"; */

const MONGODB_URL = "mongodb://localhost:27017";

const app = express();

app.use(bodyParser.json());

/* Database Integration */

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "MongoDb-Integration"
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
  console.log("Database Connected...");
});

/* MongoDB Schema */

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String
  },
  { timestamps: true }
);

const userModal = mongoose.model("user", userSchema);

app.post("/post", async (req, res) => {
  const postData = new userModal({
    email: req.body.email,
    password: req.body.password
  });
  await postData.save();
  console.log(postData);
  res.status(200).json({ message: "Data Received Successfully" });
});

app.get("/get", async (request, response) => {
  const id = request.params.id;
  console.log(id);
  const dataFromBackend = await userModal.find();
  response
    .status(200)
    .json({ message: "Data Received Successfully", data: dataFromBackend });
});

app.put("/put", async (req, res) => {
  const user = await userModal.findByIdAndUpdate(
    req.body._id,
    {
      email: req.body.email,
      password: req.body.password
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

app.delete("/delete/:id", async (req, res) => {
  console.log("Data from params", req.params.id);
  console.log("Data from body", req.body._id);
  const user = await userModal.findByIdAndDelete(req.body._id);
  if (!user) {
    return res.status(200).json({ message: "User Not Found!" });
  } else {
    return res.status(200).json({ message: "Deleted Successfully" });
  }
});

app.listen(5000);