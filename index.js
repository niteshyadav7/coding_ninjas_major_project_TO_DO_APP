const express = require("express");
const app = express();
const hostName = "http://localhost";
port = 8000;
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
const db = require("./config/mongoose");
//const TodoLists = require('./models/todo_list')
// it is use to handle middle ware here we are using express.urlenceode to us e the parser
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.use(express.static("./assets")); // for getting static
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log("Error listening on port", port);
    return;
  }
  console.log(`express running on ${hostName}:${port}`);
});
