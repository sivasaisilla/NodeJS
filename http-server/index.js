const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(
//     JSON.stringify({
//       id: 1,
//       name: "Sivasai",
//     })
//   );
// });

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    //Setting up header
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    // instead we can also write headers as
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        message: "Hello ra Sivasai",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<li>Hello</li>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
