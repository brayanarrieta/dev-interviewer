import { Request, Response } from 'express';
import { getAllQuestionsByTagId } from '../services/questions.service';

export const getQuestionsByTagId = async (req: Request, res: Response) => {
  const { tagId } = req.params;

  // TODO: Add tadId validation
  const questions = await getAllQuestionsByTagId(tagId);
  res.json(questions);
};
