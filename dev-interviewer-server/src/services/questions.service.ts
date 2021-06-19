import { VOTE_TYPE } from '../constants/enums';
import { getAllQuestionsByTagSlugDal, getQuestionByIdDal, updateQuestion } from '../dal/questions.repository';
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

  await updateQuestion(question);

  return question;
};
