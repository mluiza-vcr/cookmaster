const Router = require('express').Router();

const loginMiddlewares = require('../middlewares/loginMiddlewares');

const loginController = require('../controllers/loginController');

Router.post('/', loginMiddlewares.validateEmail,
  loginMiddlewares.validatePassword,
  loginMiddlewares.validateUser,
  loginController.loginUser);

module.exports = Router;