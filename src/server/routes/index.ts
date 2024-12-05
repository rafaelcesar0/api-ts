import { Router, type Request, type Response } from 'express';
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/', (_, res: Response) => {
  res.send('Hello World!')
});

router.post('/test/:id', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(req.body);
});

export { router };
