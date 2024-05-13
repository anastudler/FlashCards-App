const getAllUsersHandler = (req, res) => {
  res.status(200).send("All users");
};

const getUserByIdHandler = (req, res) => {
  res.status(200).send("User detail");
};
const createUserHandler = (req, res) => {
  res.status(201).send("Create user");
};

const updateUserHandler = (req, res) => {
  res.status(200).send("Update user");
};

const deleteUserHandler = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
