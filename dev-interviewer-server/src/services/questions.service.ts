import { getAllQuestionsByTagSlugDal } from '../dal/questions.repository';

export const getAllQuestionsByTagSlug = async (slug: string) => getAllQuestionsByTagSlugDal(slug);
