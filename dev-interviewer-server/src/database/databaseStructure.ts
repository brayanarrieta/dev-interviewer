import { QUESTIONS_TABLE_NAME, TAGS_TABLE_NAME } from '../constants/tableNames';

type DatabaseStructure = {[key: string]: { hashAttribute: string }}

const DATABASE_STRUCTURE: DatabaseStructure = {
  [TAGS_TABLE_NAME]: {
    hashAttribute: 'id',
  },
  [QUESTIONS_TABLE_NAME]: {
    hashAttribute: 'id',
  },
};

export default DATABASE_STRUCTURE;
