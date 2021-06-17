import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT = process.env.PORT || 8000;

export const NODE_ENVIRONMENT = process.env.NODE_ENV;

export const HARPER_HOST = process.env.HARPER_INSTANCE_URL;

export const HARPER_USERNAME = process.env.HARPER_INSTANCE_USERNAME;

export const HARPER_PASSWORD = process.env.HARPER_INSTANCE_PASSWORD;

export const HARPER_SCHEMA = process.env.HARPER_INSTANCE_SCHEMA;
