const connection = require('./connection');

const createUser = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.collection('users').insertOne({ name, email, password, role: 'user' });
  return { _id: inserted.insertedId, name, email, role: 'user' };
};

const getByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

module.exports = {
  createUser,
  getByEmail,
};