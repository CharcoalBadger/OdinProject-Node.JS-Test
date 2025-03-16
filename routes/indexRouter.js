// routes/meowRouter.js
const { Router } = require("express");

const meowRouter = Router();

meowRouter.get("/", (req, res) => res.send("All meows"));
meowRouter.get("/:meowId", (req, res) => {
  const { meowId } = req.params;
  res.send(`meow ID: ${meowId}`);
});

module.exports = meowRouter;
