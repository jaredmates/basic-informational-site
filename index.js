const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
