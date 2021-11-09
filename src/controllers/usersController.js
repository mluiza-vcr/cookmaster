const usersModel = require('../models/usersModel');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const register = await usersModel.createUser({ name, email, password });
  res.status(201).json({ user: register });
};

module.exports = {
  registerUser,
};