import express, {
  NextFunction, Request, Response, Application, Router,
} from 'express';

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

const DEFAULT_MIDDLEWARES = [express.json()];

export const registerRoute = (
  app: Application | Router,
  {
    routePath,
    method,
    middlewares = [],
    controllerAction,
  }: {
    routePath: string,
    method: Method,
    middlewares?: any[],
    controllerAction: any
  },
) => {
  const actionWrapper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controllerAction(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  const routeMiddlewares = [...DEFAULT_MIDDLEWARES, ...middlewares];

  // @ts-ignore
  app[method](routePath, ...routeMiddlewares, actionWrapper);
};
