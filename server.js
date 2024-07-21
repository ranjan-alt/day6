const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
require("dotenv").config({ path: "./.env" });

const Country = [
  {
    countryCode: +91,
  },
];

app.get("/getCountry/:id/:countryCode", (req, res) => {
  const { id, countryCode } = req.params;
  const paramData = { id, countryCode }; // jo variable hota hai wo ek hi leta hai but object k andar hm daaal sakte hian
  res.status(200).json({ message: "success", paramData });
});

app.get("/getCountry?id&countryCode", (req, res) => {
  // id=1 and countryCode = +91  YE SAB FRONTEND ME AATA HAI
  // "&" se hm parameter seprate kar dete hain
  const { id, countryCode } = req.params;
  res.send;
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
