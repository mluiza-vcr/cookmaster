const Router = require('express').Router();

const usersController = require('../controllers/usersController');

const usersMiddlewares = require('../middlewares/usersMiddlewares');

Router.post('/', usersMiddlewares.validateName,
  usersMiddlewares.validateEmail,
  usersMiddlewares.verifyEmailExists,
  usersMiddlewares.validatePassword,
  usersController.registerUser);

module.exports = Router;