const connection = require('./connection');

const createUser = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.connection('users').insertOne({ name, email, password, role: 'user' });
  return { _id: inserted.insertedId, name, email, password, role: 'user' };
};

const getByEmail = async (email) => {
  const db = await connection();
  const user = await db.connection('users').findOne({ email });
  return user;
};

module.exports = {
  createUser,
  getByEmail,
};