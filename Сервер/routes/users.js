// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlewares/users').findAllUsers;
const createUser = require('../middlewares/users').createUser;
const findUserById = require('../middlewares/users').findUserById;
const updateUser = require('../middlewares/users').updateUser;
const deleteUser = require('../middlewares/users').deleteUser;
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users').checkEmptyNameAndEmailAndPassword;
const checkIsUserExists = require('../middlewares/users').checkIsUserExists;
const checkEmptyNameAndEmail = require('../middlewares/users').checkEmptyNameAndEmail;
const filterPassword = require('../middlewares/users').filterPassword;
const hashPassword = require('../middlewares/users').hashPassword;
const checkAuth = require('../middlewares/auth').checkAuth;


const sendAllUsers = require('../controllers/users').sendAllUsers;
const sendUserCreated = require('../controllers/users').sendUserCreated;
const sendUserById = require('../controllers/users').sendUserById;
const sendUserUpdated = require('../controllers/users').sendUserUpdated;
const sendUserDeleted = require('../controllers/users').sendUserDeleted;
const sendMe = require('../controllers/users').sendMe;


// Обрабатываем GET-запрос с роутом '/users'

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated,
  checkAuth
); 

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated,
  checkAuth
);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted, checkAuth);



module.exports = usersRouter;