const usersModel = require('../models/usersModel');

function validateFormatEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(String(email).toLowerCase());
}

const invalidMessage = {
  message: 'Invalid entries. Try again.',
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) res.status(400).json(invalidMessage);
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) res.status(400).json(invalidMessage);
  if (!(validateFormatEmail(email))) res.status(400).json(invalidMessage);
  next();
};

const verifyEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const verify = await usersModel.getByEmail(email);
  if (verify) return res.status(409).json({ message: 'Email already registered' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(invalidMessage);
  next();
};

module.exports = {
  validateName,
  validateEmail,
  verifyEmailExists,
  validatePassword,
};