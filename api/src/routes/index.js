const { Router } = require("express");

const userRouter = require("./usersRouter");
const cardsRouter = require("./cardsRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/cards", cardsRouter);

module.exports = router;
