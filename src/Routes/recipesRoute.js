const Router = require('express').Router();

const validateToken = require('../middlewares/validateToken');

const recipesMiddleware = require('../middlewares/recipesMiddlewares');

const recipesController = require('../controllers/recipesController');

Router.post('/', validateToken,
  recipesMiddleware.validateName,
  recipesMiddleware.validateIngredients,
  recipesMiddleware.validatePreparation,
  recipesController.createRecipe);

Router.get('/', recipesController.getAllRecipes);

Router.get('/:id', recipesController.getRecipeById);

Router.put('/:id', validateToken,
  recipesMiddleware.validateName,
  recipesMiddleware.validateIngredients,
  recipesMiddleware.validatePreparation,
  recipesController.updateRecipeById);

Router.delete('/:id', validateToken,
  recipesController.deleteRecipeById);

module.exports = Router;
