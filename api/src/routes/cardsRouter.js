const { Router } = require("express");
const {
  getAllCardsHandler,
  getCardByIdHandler,
  createCardHandler,
  updateCardHandler,
  deleteCardHandler,
} = require("../handlers/cardsHandlers");

const cardsRouter = Router();

cardsRouter.get("/", getAllCardsHandler);

cardsRouter.get("/:id", getCardByIdHandler);

cardsRouter.post("/", createCardHandler);

cardsRouter.put("/:id", updateCardHandler);

cardsRouter.delete("/:id", deleteCardHandler);

module.exports = cardsRouter;
