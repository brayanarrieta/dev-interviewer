import express from 'express';
import { getQuestionsByTagSlug } from '../controllers/questions.controller';

import { registerRoute } from '../helpers/routerHelpers';

const router = express.Router();

registerRoute(router, {
  routePath: '/tag/slug/:slug',
  controllerAction: getQuestionsByTagSlug,
  method: 'get',
});

export default router;
