import harperive from 'harperive';
import {
  HARPER_HOST, HARPER_PASSWORD, HARPER_SCHEMA, HARPER_USERNAME,
} from '../config';

const DB_CONFIG = {
  harperHost: HARPER_HOST,
  username: HARPER_USERNAME,
  password: HARPER_PASSWORD,
  schema: HARPER_SCHEMA,
};

const { Client } = harperive;
// @ts-ignore - there is a problem with typing when is used env variables
const harperiveClient = new Client(DB_CONFIG);

export default harperiveClient;
