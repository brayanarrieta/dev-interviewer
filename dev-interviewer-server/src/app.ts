import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
