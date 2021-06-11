import express from 'express';

import { getTags } from '../controllers/tags.controller';
import { registerRoute } from '../helpers/routerHelpers';

const router = express.Router();

registerRoute(router, {
  routePath: '/',
  controllerAction: getTags,
  method: 'get',
});

export default router;
