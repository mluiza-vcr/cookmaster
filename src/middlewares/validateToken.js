const jwt = require('jsonwebtoken');

const secret = 'projectCookmaster';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verifiedToken = jwt.verify(token, secret);
    req.payload = verifiedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = validateToken;