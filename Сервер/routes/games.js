// Файл routes/games.js

const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games').findAllGames;
const findGameById = require('../middlewares/games').findGameById;
const createGame = require('../middlewares/games').createGame;
const updateGame = require('../middlewares/games').updateGame;
const deleteGame = require('../middlewares/games').deleteGame;
const checkEmptyFields = require('../middlewares/games').checkEmptyFields;
const checkIfCategoriesAvaliable = require('../middlewares/games').checkIfCategoriesAvaliable;
const checkIfUsersAreSafe = require('../middlewares/games').checkIfUsersAreSafe;
const checkIsGameExists = require('../middlewares/games').checkIsGameExists;
const checkAuth = require('../middlewares/auth').checkAuth;

const sendAllGames = require('../controllers/games').sendAllGames;
const sendGameById = require('../controllers/games').sendGameById;
const sendGameCreated = require('../controllers/games').sendGameCreated;
const sendGameUpdated = require('../controllers/games').sendGameUpdated;
const sendGameDeleted = require('../controllers/games').sendGameDeleted;

gamesRouter.post(
  "/games",
  findAllGames,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkEmptyFields,
  createGame,
  sendGameCreated,
  checkAuth,
);

gamesRouter.put(
  "/games/:id",
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkAuth,
);

gamesRouter.get('/games', findGameById, findAllGames, sendAllGames, sendGameById);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted, checkAuth,); 

module.exports = gamesRouter;