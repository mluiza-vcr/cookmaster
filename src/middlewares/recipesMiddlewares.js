const invalidMsg = {
  message: 'Invalid entries. Try again.',
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json(invalidMsg);
  next();
};

const validateIngredients = (req, res, next) => {
  const { ingredients } = req.body;
  if (!ingredients) return res.status(400).json(invalidMsg);
  next();
};

const validatePreparation = (req, res, next) => {
  const { preparation } = req.body;
  if (!preparation) return res.status(400).json(invalidMsg);
  next();
};

module.exports = {
  validateName,
  validateIngredients,
  validatePreparation,
};