const recipesModel = require('../models/recipesModel');

const createRecipe = async (req, res) => {
  const { _id } = req.payload;
  const { name, ingredients, preparation } = req.body;
  const register = await recipesModel.createRecipe(name, ingredients, preparation, _id);
  return res.status(201).json({ recipe: register });
};

const getAllRecipes = async (_req, res) => {
  const recipes = await recipesModel.getAllRecipes();
  return res.status(200).json(recipes);
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = await recipesModel.getRecipeById(id);
  if (!recipe) return res.status(404).json({ message: 'recipe not found' });
  return res.status(200).json(recipe);
};

const updateRecipeById = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const update = await recipesModel.updateById(id, name, ingredients, preparation);
  return res.status(200).json(update);
};

const deleteRecipeById = async (req, res) => {
  const { id } = req.params;
  await recipesModel.deleteById(id);
  return res.status(204).end();
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipeById,
  deleteRecipeById,
};