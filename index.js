const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.writeHead(200, { "Content-Type": "text/html" });

  let path = "";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  if (req.url.indexOf(".css") != -1) {
    //req.url has the pathname, check if it conatins '.css'

    fs.readFile(__dirname + "/public/css/styles.css", function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }

  // Send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data)
      res.end(data);
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("listening for requests on port 8080");
});
