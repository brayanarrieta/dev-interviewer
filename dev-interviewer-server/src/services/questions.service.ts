import { VOTE_TYPE } from '../constants/enums';
import {
  getAllQuestionsByTagSlugDal, getQuestionByIdDal, insertQuestionDal, updateQuestionDal,
} from '../dal/questions.repository';
import { ServiceError } from '../helpers/errors';
import { Question, VoteType } from '../types';

export const getAllQuestionsByTagSlug = async (slug: string) => getAllQuestionsByTagSlugDal(slug);

export const voteQuestionById = async (questionId: string, voteType: VoteType) => {
  const question: Question = await getQuestionByIdDal(questionId);
  if (!question) {
    throw new ServiceError({
      token: 'VOTE_QUESTION_ERROR',
    });
  }

  if (voteType === VOTE_TYPE.UP) {
    question.votesUp += 1;
  }

  if (voteType === VOTE_TYPE.DOWN) {
    question.votesDown += 1;
  }

  await updateQuestionDal(question);

  return question;
};

const DEFAULT_QUESTION_DATA = { votesUp: 0, votesDown: 0 };

export const addQuestion = async (
  questionData: {question: string, answer:string, tagId:string, },
) => {
  const newQuestion:Question = { ...questionData, ...DEFAULT_QUESTION_DATA };
  const questionId = await insertQuestionDal(newQuestion);
  if (!questionId) {
    throw new ServiceError({
      token: 'ADD_NEW_QUESTION_ERROR',
    });
  }

  const question: Question = await getQuestionByIdDal(questionId);
  return question;
};
