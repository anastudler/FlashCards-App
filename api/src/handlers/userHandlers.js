const getAllUsers = (req, res) => {
  res.status(200).send("All users");
};

const getUserById = (req, res) => {
  res.status(200).send("User detail");
};
const createUser = (req, res) => {
  res.status(201).send("Create user");
};

const updateUser = (req, res) => {
  res.status(200).send("Update user");
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
