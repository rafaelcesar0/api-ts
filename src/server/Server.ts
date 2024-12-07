import express, { type Response } from 'express';
import { router } from './routes';
import './shared/services/TranslateZod';

const server = express();

server.use(express.json());

server.use(router);

export { server };
