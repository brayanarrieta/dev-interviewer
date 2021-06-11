import { QUESTIONS_TABLE_NAME } from '../constants/tableNames';
import { insertRecord } from '../database/factory';
import { FactoryOptions, Question } from '../types';

export const insertQuestion = async (
  question: Question,
  options?: FactoryOptions,
) => insertRecord(QUESTIONS_TABLE_NAME, question, options);
