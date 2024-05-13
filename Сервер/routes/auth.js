// routes/auth.js

const authRouter = require("express").Router();
const login = require("../controllers/auth").login;

authRouter.post("/auth/login", login);

module.exports = authRouter;
