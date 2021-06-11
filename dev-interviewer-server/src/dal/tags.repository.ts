import { executeRawQuery } from '../database';
import { TAGS_TABLE_NAME } from '../constants/tableNames';
import { insertRecord } from '../database/factory';
import { FactoryOptions, Tag } from '../types';

export const getAllTagsDal = async () => {
  const query = `SELECT * FROM schema.${TAGS_TABLE_NAME}`;
  const tags = await executeRawQuery(query);

  return tags;
};

export const insertTag = async (
  tag: Tag,
  options?: FactoryOptions,
) => insertRecord(TAGS_TABLE_NAME, tag, options);
