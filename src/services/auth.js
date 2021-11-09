const jwt = require('jsonwebtoken');

const secret = 'projectCookmaster';

const generateToken = (payload) => jwt.sign(payload, secret);

module.exports = {
  generateToken,
};
