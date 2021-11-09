const connection = require('./connection');

const createRecipe = async (name, ingredients, preparation, userId) => {
  const db = await connection();
  const inserted = await db.collection('recipes')
    .insertOne({ name, ingredients, preparation, userId });
  return { _id: inserted.insertedId, name, ingredients, preparation, userId };
};

module.exports = {
  createRecipe,
};