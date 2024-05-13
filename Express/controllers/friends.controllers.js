const friends = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).send("Enter a valid name");
  }

  const friend = Object.assign({ id: friends.length }, req.body);

  res.status(201).json(friend);

  friends.push(friend);

  console.log("friends list updated", friends);
}

module.exports = {
  postFriend,
};
