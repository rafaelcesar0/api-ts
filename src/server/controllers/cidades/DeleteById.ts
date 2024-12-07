import type { Request, Response } from 'express';
import { z } from 'zod';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

const params = z.object({
	id: z.string().uuid('ID Invalido'),
});

type TParams = z.infer<typeof params>;

export const deleteByIdValidation = validation({ params });

export const deleteById = (req: Request<TParams>, res: Response) => {
	console.log(req.params);

	res.status(StatusCodes.NO_CONTENT).send();
};
