import { NextFunction, Request, Response } from 'express';
import { ServiceError } from '../helpers/errors';

export const errorMiddleware = (
  err: ServiceError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    stack, message, token, ...rest
  } = err;

  res.status(err.status).json({
    stack, message, token, ...rest,
  });
  next();
};
