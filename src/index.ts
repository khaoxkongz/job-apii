import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import rootRouter from './root-routes';

const main = async () => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.use('/', rootRouter);
  server.listen(8000, () => console.log(`Express server is up at 8000`));
};

main();
