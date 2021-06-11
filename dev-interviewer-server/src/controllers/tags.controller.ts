import { Request, Response } from 'express';
import { getAllTags } from '../services/tags.service';

export const getTags = async (req: Request, res: Response) => {
  const tags = await getAllTags();
  res.json(tags);
};
