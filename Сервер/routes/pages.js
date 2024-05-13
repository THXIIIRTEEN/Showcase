const pagesRouter = require("express").Router();
const sendIndex = require("../controllers/auth.js").sendIndex;
const sendDashboard = require("../controllers/auth.js").sendDashboard;
const checkCookiesJWT = require("../middlewares/auth.js").checkCookiesJWT;
const checkAuth = require("../middlewares/auth.js").checkAuth;

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, sendDashboard); 

module.exports = pagesRouter;