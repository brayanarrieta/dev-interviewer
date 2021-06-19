import { QUESTIONS_TABLE_NAME, TAGS_TABLE_NAME } from '../constants/tableNames';
import { executeRawQuery, insertRecord, updateRecord } from '../database/factory';
import { FactoryOptions, Question } from '../types';

export const insertQuestion = async (
  question: Question,
  options?: FactoryOptions,
) => insertRecord(QUESTIONS_TABLE_NAME, question, options);

// TODO: Add support for lazy loading and pagination
export const getAllQuestionsByTagSlugDal = async (slug: string, options?:FactoryOptions) => {
  const query = `
    SELECT q.* FROM schema.${TAGS_TABLE_NAME} AS t
    INNER JOIN schema.${QUESTIONS_TABLE_NAME} AS q ON(q.tagId=t.id)
    WHERE t.slug = '${slug}'
  `;
  const result = await executeRawQuery(query, options);

  return result?.data;
};

export const getQuestionByIdDal = async (questionId: string, options?:FactoryOptions) => {
  const query = `
    SELECT * FROM schema.${QUESTIONS_TABLE_NAME}
    WHERE id = '${questionId}'
  `;
  const result = await executeRawQuery(query, options);

  return result?.data?.[0];
};

export const updateQuestion = async (
  question: Question,
  options?:FactoryOptions,
) => updateRecord(QUESTIONS_TABLE_NAME, question, options);
