// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllCategories = require('../middlewares/categories').findAllCategories;
const createCategory = require('../middlewares/categories').createCategory;
const findCategoryById = require('../middlewares/categories').findCategoryById;
const updateCategory = require('../middlewares/categories').updateCategory;
const deleteCategory = require('../middlewares/categories').deleteCategory;
const checkIsCategoryExists = require('../middlewares/categories').checkIsCategoryExists;
const checkEmptyName = require('../middlewares/categories').checkEmptyName;
const checkAuth = require('../middlewares/auth').checkAuth;

const sendAllCategories = require('../controllers/categories').sendAllCategories;
const sendCategoryCreated = require('../controllers/categories').sendCategoryCreated;
const sendCategoryById = require('../controllers/categories').sendCategoryById;
const sendCategoryUpdated = require('../controllers/categories').sendCategoryUpdated;
const sendCategoryDeleted = require('../controllers/categories').sendCategoryDeleted;

// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated,
  checkAuth
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated,
  checkAuth
);

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted, checkAuth);

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);


// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;