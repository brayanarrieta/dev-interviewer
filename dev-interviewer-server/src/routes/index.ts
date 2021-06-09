import express from 'express';

import tagsRouter from './tags.route';

const router = express.Router();

// Routes setup
router.use('/tags', tagsRouter);

export default router;
