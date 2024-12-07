import type { Request, Response } from 'express';
import { z } from 'zod';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

const body = z.object({
	name: z.string().min(3).trim(),
});

type TBody = z.infer<typeof body>;

export const createValidation = validation({ body });

export const create = (req: Request<{}, {}, TBody>, res: Response) => {
	console.log(req.body);

	res.status(StatusCodes.CREATED).json({ success: 'Não implementado!' });
};
