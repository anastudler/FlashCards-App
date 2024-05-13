const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../handlers/userHandlers");

const usersRouter = Router();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/", createUser);

usersRouter.put("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
