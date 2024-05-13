const getAllCardsHandler = (req, res) => {
  res.status(200).send("All cards");
};

const getCardByIdHandler = (req, res) => {
  res.status(200).send("Card detail");
};
const createCardHandler = (req, res) => {
  res.status(201).send("Create Card");
};

const updateCardHandler = (req, res) => {
  res.status(200).send("Update Card");
};

const deleteCardHandler = (req, res) => {
  res.status(200).send("Delete Card");
};

module.exports = {
  getAllCardsHandler,
  getCardByIdHandler,
  createCardHandler,
  updateCardHandler,
  deleteCardHandler,
};
