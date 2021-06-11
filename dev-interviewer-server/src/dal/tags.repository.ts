import { executeRawQuery } from '../database';
import { TAGS_TABLE_NAME } from '../constants/tableNames';

export const getAllTagsDal = async () => {
  const query = `SELECT * FROM schema.${TAGS_TABLE_NAME}`;
  const tags = await executeRawQuery(query);

  return tags;
};
