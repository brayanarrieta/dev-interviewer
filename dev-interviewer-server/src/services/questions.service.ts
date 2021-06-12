import { getAllQuestionsByTagIdDal } from '../dal/questions.repository';

export const getAllQuestionsByTagId = async (tagId: string) => getAllQuestionsByTagIdDal(tagId);
