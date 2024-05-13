const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/messages.router");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
  next();

  console.log(Date.now() - start);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
