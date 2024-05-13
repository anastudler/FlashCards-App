const getAllCards = (req, res) => {
  res.status(200).send("All cards");
};

const getCardById = (req, res) => {
  res.status(200).send("Card detail");
};
const createCard = (req, res) => {
  res.status(201).send("Create Card");
};

const updateCard = (req, res) => {
  res.status(200).send("Update Card");
};

const deleteCard = (req, res) => {
  res.status(200).send("Delete Card");
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};
