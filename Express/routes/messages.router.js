const express = require("express");

const messagesController = require("../controllers/messages.controllers");

const messageRouter = express.Router();

messageRouter.get("/", messagesController.getMessages);
messageRouter.get("/:id/:x", messagesController.getMessage);

module.exports = messageRouter;
