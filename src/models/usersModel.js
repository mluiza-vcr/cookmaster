const connection = require('./connection');

const createUser = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.connection('users').insertOne({ name, email, password, role: 'user' });
  return { _id: inserted.insertedId, name, email, password };
};

module.exports = {
  createUser,
};