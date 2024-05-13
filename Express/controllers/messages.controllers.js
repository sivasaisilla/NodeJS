const path = require("path");

function getMessages(req, res) {
  // res.send({ id: 1, name: "Sir Isaac Newton" });
  res.sendFile(path.join(__dirname, "..", "public", "images", "nature.jpg"));
}

function getMessage(req, res) {
  const msgID = req.params.id;
  const msgX = req.params.x;
  res.status(200).json({ id: msgID, number: msgX });
}

module.exports = {
  getMessages,
  getMessage,
};
