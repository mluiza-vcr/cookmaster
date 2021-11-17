const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createRecipe = async (name, ingredients, preparation, userId) => {
  const db = await connection();
  const inserted = await db.collection('recipes')
    .insertOne({ name, ingredients, preparation, userId });
  return { _id: inserted.insertedId, name, ingredients, preparation, userId };
};

const getAllRecipes = async () => {
  const db = await connection();
  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
};

const getRecipeById = async (id) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  return recipe;
};

const updateById = async (id, name, ingredients, preparation) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const update = await db.collection('recipes').findOneAndUpdate({ _id: ObjectId(id) },
    { $set: { name, ingredients, preparation } }, { returnOriginal: false });
  return update.value;
};

const deleteById = async (id) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

const updateImage = async (id, image) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const update = await db.collection('recipes').findOneAndUpdate({ _id: ObjectId(id) },
    { $set: { image } }, { returnOriginal: false });
  return update.value;
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateById,
  deleteById,
  updateImage,
};