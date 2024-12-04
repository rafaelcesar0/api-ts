import express, { type Response } from 'express';

const server = express();

server.get('/', (_, res: Response) => {
  res.send('Hello World!')
});

export { server };
