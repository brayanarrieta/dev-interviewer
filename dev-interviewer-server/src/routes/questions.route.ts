import express from 'express';
import { getQuestionsByTagId } from '../controllers/questions.controller';

import { registerRoute } from '../helpers/routerHelpers';

const router = express.Router();

registerRoute(router, {
  routePath: '/tag/:tagId',
  controllerAction: getQuestionsByTagId,
  method: 'get',
});

export default router;
