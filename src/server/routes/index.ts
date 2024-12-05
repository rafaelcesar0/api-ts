import { Router, type Response } from 'express';
import { CidadesController } from "./../controllers";

const router = Router();

router.get('/', (_, res: Response) => {
  res.send('Hello World!')
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };
