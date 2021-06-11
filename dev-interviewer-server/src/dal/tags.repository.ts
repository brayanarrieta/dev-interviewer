import { executeRawQuery } from '../database';

const TABLE_NAME = 'tags';

export const getAllTagsDal = async () => {
  const query = `SELECT * FROM schema.${TABLE_NAME}`;
  const tags = await executeRawQuery(query);

  return tags;
};
