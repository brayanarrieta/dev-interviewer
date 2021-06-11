import { TAGS_TABLE_NAME } from '../constants/tableNames';
import { getAllRecords, insertRecord } from '../database/factory';
import { FactoryOptions, Tag } from '../types';

export const getAllTagsDal = async (
  options?: FactoryOptions,
) => getAllRecords(TAGS_TABLE_NAME, options);

export const insertTag = async (
  tag: Tag,
  options?: FactoryOptions,
) => insertRecord(TAGS_TABLE_NAME, tag, options);
