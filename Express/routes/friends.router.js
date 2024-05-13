const express = require("express");
const friendsRouter = express.Router();
const friendsController = require("../controllers/friends.controllers");

friendsRouter.use((req, res, next) => {
  console.log("ip address", req.ip);
  next();
});

friendsRouter.post("/", friendsController.postFriend);

module.exports = friendsRouter;
