import express from 'express';

import tagsRouter from './tags.route';
import questionsRouter from './questions.route';

const router = express.Router();

// Routes setup
router.use('/tags', tagsRouter);
router.use('/questions', questionsRouter);

export default router;
