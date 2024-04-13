import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import rootRouter from './root-routes';
import { PORT } from './config';

const main = async () => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.use('/', rootRouter);
  server.listen(PORT, () => console.log(`Express server is up at ${PORT}`));
};

main();
