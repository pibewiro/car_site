const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, 'dist')));
app.use("/dist", express.static(path.join(__dirname, 'css')));

let port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening to port:", port);