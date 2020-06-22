const express = require("express");
const usersRouter = require("./api/users");
const router = express.Router();

router.use("/users", usersRouter);

module.exports = router;
