const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, 'dist')));
let port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening to port:", port);