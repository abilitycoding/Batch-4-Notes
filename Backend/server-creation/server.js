const express = require("express");
const app = express();
const database = [
  {
    name: "TSandy",
    age: 30,
    email: "sandy@gmail.com",
    image:
      "https://media.istockphoto.com/id/1459300331/vector/tamil-letter-forming-the-word-tamil-vector-illustration.jpg?s=612x612&w=0&k=20&c=jaXZzpEUykX6-2KKYZCOAilGfaIofet_jPyAGwIOLnA="
  }
];
app.get("/get-data", (request, response) => {
  response.send(database);
});
app.listen(3000, () => {
  console.log("Server running on the port 3000");
});