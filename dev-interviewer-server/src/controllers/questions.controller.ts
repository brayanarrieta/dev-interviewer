import { Request, Response } from 'express';
import { HTTP_STATUS_CODES } from '../constants/enums';
import { ServiceError } from '../helpers/errors';
import { addQuestion, getAllQuestionsByTagSlug, voteQuestionById as voteQuestionByIdService } from '../services/questions.service';

export const getQuestionsByTagSlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  if (!slug) {
    throw new ServiceError({
      token: 'SLUG_PARAM_NOT_PROVIDED',
      status: HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY,
    });
  }
  const questions = await getAllQuestionsByTagSlug(slug);
  res.json({ questions });
};

export const voteQuestionById = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  const { voteType } = req.body;

  if (!questionId || !voteType) {
    throw new ServiceError({
      token: 'MISSING_REQUIRED_PARAMS',
    });
  }

  const question = await voteQuestionByIdService(questionId, voteType);
  res.json({ question });
};

export const addNewQuestion = async (req: Request, res: Response) => {
  const { question, answer, tagId } = req.body;

  if (!question || !answer || !tagId) {
    throw new ServiceError({
      token: 'MISSING_REQUIRED_PARAMS',
    });
  }

  const insertedQuestion = await addQuestion({ question, answer, tagId });
  res.json({ question: insertedQuestion });
};
