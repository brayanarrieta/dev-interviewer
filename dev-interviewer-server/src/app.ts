import express from 'express';
import cors from 'cors';

import { SERVER_PORT } from './config';
import { errorMiddleware } from './middlewares/error.middleware';
import router from './routes';

const app = express();

app.use(cors());

app.use('/api', router);

app.use(errorMiddleware);

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`);
});
