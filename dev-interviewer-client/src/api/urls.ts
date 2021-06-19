import { API_BASE_URL } from '../config';

export const BASE_URL = API_BASE_URL;

export const GET_TAGS_URL = 'tags';

const GET_QUESTIONS_BY_SLUG_BASE_URL = 'questions/tag/slug';

export const getQuestionsBySlugUrl = (slug: string): string => `${GET_QUESTIONS_BY_SLUG_BASE_URL}/${slug}`;

export const getVoteQuestionUrl = (questionId: string): string => `questions/${questionId}/vote`;
