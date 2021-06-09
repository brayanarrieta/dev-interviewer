import express from 'express';

import { getTags } from '../controllers/tags.controller';

const router = express.Router();

router.get('/', getTags);

export default router;
