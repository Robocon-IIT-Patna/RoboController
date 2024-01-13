const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "POST");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.post("/", (req, res) => {
  const data = req.body;

  console.log("Slider Values:", JSON.stringify(data));
  res.json({ message: "Transmission Successful" });
});
app.post("/cmd", (req, res) => {
  const data = req.body;

  console.log("Command:", JSON.stringify(data));
  res.json({ message: "Transmission Successful" });
});
app.post("/trigger", (req, res) => {
  const data = req.body;

  console.log("Triggers:", JSON.stringify(data));
  res.json({ message: "Transmission Successful" });
});

app.listen(port, () => {
  console.log(`Server is Running on http://locahost:${port}`);
});
