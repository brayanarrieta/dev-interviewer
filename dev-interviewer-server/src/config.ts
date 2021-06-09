import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || 8000;

export const NODE_ENVIRONMENT = process.env.NODE_ENV;

// eslint-disable-next-line no-console
console.log({
  SERVER_PORT, NODE_ENVIRONMENT,
});
