import { Request, Response } from 'express';
import { getAllQuestionsByTagSlug } from '../services/questions.service';

export const getQuestionsByTagSlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  // TODO: Add slug validation
  const questions = await getAllQuestionsByTagSlug(slug);
  res.json({ questions });
};
