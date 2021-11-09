const usersModel = require('../models/usersModel');

const emptyFields = {
  message: 'All fields must be filled',
};

const invalidData = {
  message: 'Incorrect username or password',
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(401).json(emptyFields);
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(401).json(emptyFields);
  next();
};

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await usersModel.getByEmail(email);
  if (!user || user.password !== password) return res.status(401).json(invalidData);
  req.payload = user;
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  validateUser,
};