const recipesModel = require('../models/recipesModel');

const createRecipe = async (req, res) => {
  const { _id } = req.payload;
  console.log(req.payload);
  const { name, ingredients, preparation } = req.body;
  const register = await recipesModel.createRecipe(name, ingredients, preparation, _id);
  return res.status(201).json({ recipe: register });
};

const getAllRecipes = async (_req, res) => {
  const recipes = await recipesModel.getAllRecipes();
  return res.status(200).json(recipes);
};

module.exports = {
  createRecipe,
  getAllRecipes,
};