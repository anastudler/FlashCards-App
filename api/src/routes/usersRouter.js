const { Router } = require("express");
const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandlers");

const usersRouter = Router();

usersRouter.get("/", getAllUsersHandler);

usersRouter.get("/:id", getUserByIdHandler);

usersRouter.post("/", createUserHandler);

usersRouter.put("/:id", updateUserHandler);

usersRouter.delete("/:id", deleteUserHandler);

module.exports = usersRouter;
