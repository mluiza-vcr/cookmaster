const auth = require('../services/auth');

const loginUser = (req, res) => {
  const { password, ...userInfo } = req.payload;
  const token = auth.generateToken(userInfo);
  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};