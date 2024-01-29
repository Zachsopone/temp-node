const http = require("http");

const server = http.createServer((req, res) => {
  //res.write(`This is a response from server`);
  //res.end();
  if (req.url === "/") {
    res.end(`This is a  homepage`);
  }
  if (req.url === "/about") {
    res.end(`This is a about page`);
  }
  res.end(`
    <h1>Error!</h1>
    <p>we cant find the page you are looking for</p>
    <a href="/">back to home</a>
  `);
});

server.listen(3000);
