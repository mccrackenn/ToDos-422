const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { title: "Home Page" });
});

//Team Member Routes
app.get("/Neil", (req, res) => {
  res.render("neil", { title: "Neil Page" });
});
app.get("/Trupti", (req, res) => {
  res.render("trupti", { title: "Trupti's Page" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
