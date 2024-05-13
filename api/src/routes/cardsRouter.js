const { Router } = require("express");

const cardsRouter = Router();

cardsRouter.get("/", (req, res) => {
  res.status(200).send("All cards");
});

cardsRouter.get("/:id", (req, res) => {
  res.status(200).send("Card detail");
});

cardsRouter.post("/", (req, res) => {
  res.status(201).send("Create card");
});

cardsRouter.put("/:id", (req, res) => {
  res.status(200).send("Update card");
});

cardsRouter.delete("/:id", (req, res) => {
  res.status(200).send("Delete card");
});

module.exports = cardsRouter;
