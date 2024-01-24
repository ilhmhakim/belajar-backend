import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var firstName = 0;
var lastName = 0;
var countName = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    htmlContent: "<h1>Enter your name below</h1>",
  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  firstName = req.body["fName"].length;
  lastName = req.body["lName"].length;
  countName = firstName + lastName;
  const data = {
    htmlContent: `<h1>There are ${countName} letters in your name</h1>`
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
