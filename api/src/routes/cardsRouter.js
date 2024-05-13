const { Router } = require("express");
const {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
} = require("../handlers/cardsHandlers");

const cardsRouter = Router();

cardsRouter.get("/", getAllCards);

cardsRouter.get("/:id", getCardById);

cardsRouter.post("/", createCard);

cardsRouter.put("/:id", updateCard);

cardsRouter.delete("/:id", deleteCard);

module.exports = cardsRouter;
