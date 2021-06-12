import { QUESTIONS_TABLE_NAME } from '../constants/tableNames';
import { insertRecord, searchByValue } from '../database/factory';
import { FactoryOptions, Question } from '../types';

export const insertQuestion = async (
  question: Question,
  options?: FactoryOptions,
) => insertRecord(QUESTIONS_TABLE_NAME, question, options);

// TODO: Add support for lazy loading and pagination
export const getAllQuestionsByTagIdDal = async (tagId: string) => searchByValue(
  QUESTIONS_TABLE_NAME,
  { searchAttribute: 'tagId', searchValue: tagId },
);
