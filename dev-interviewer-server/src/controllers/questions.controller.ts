import { Request, Response } from 'express';
import { HTTP_STATUS_CODES } from '../constants/enums';
import { ServiceError } from '../helpers/errors';
import { getAllQuestionsByTagSlug } from '../services/questions.service';

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
