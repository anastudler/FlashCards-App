const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).send("All users");
});

usersRouter.get("/:id", (req, res) => {
  res.status(200).send("User detail");
});

usersRouter.post("/", (req, res) => {
  res.status(201).send("Create user");
});

usersRouter.put("/:id", (req, res) => {
  res.status(200).send("Update user");
});

usersRouter.delete("/:id", (req, res) => {
  res.status(200).send("Delete user");
});

module.exports = usersRouter;
