const Router = require('express').Router();

const path = require('path');

const multer = require('multer');

const validateToken = require('../middlewares/validateToken');

const recipesMiddleware = require('../middlewares/recipesMiddlewares');

const recipesController = require('../controllers/recipesController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer({ storage });

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

Router.put('/:id/image', upload.single('image'),
  validateToken,
  recipesController.addImage);

module.exports = Router;
