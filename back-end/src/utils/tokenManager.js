const JWT = require('jsonwebtoken');
require('dotenv/config');
const CreateError = require('./createError');

const { JWT_SECRET } = process.env;

export const generateToken = (payload) => {
  const token = JWT.sign(payload, JWT_SECRET);
  return token;
};

export const validateToken = (token) => {
  const decoded = JWT.verify(token, JWT_SECRET);
  if (!decoded) {
    throw new CreateError('UnauthorizedError', 'Token inválido');
  }
  return decoded;
};