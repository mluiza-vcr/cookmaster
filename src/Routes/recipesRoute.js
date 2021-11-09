const Router = require('express').Router();

const validateToken = require('../middlewares/validateToken');

const recipesMiddleware = require('../middlewares/recipesMiddlewares');

const recipesController = require('../controllers/recipesController');

Router.post('/', validateToken,
recipesMiddleware.validateName,
recipesMiddleware.validateIngredients,
recipesMiddleware.validatePreparation,
recipesController.createRecipe);

module.exports = Router;
