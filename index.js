const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Static Files
app.use(
  express.static(path.join(__dirname, "public"), {
    // extensions: ["html"],
    // extensions: ["css"],
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/", "index.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/", "contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/", "404.html"));
});

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
