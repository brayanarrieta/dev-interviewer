import express from 'express';
import { addNewQuestion, getQuestionsByTagSlug, voteQuestionById } from '../controllers/questions.controller';

import { registerRoute } from '../helpers/routerHelpers';

const router = express.Router();

registerRoute(router, {
  routePath: '/tag/slug/:slug',
  controllerAction: getQuestionsByTagSlug,
  method: 'get',
});

registerRoute(router, {
  routePath: '/:questionId/vote',
  controllerAction: voteQuestionById,
  method: 'put',
});

registerRoute(router, {
  routePath: '/',
  controllerAction: addNewQuestion,
  method: 'post',
});

export default router;
