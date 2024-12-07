import type { Request, Response } from 'express';
import { z } from 'zod';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

const query = z.object({
	page: z
		.string()
		.optional()
		.transform((val) => (val ? Number(val) : undefined))
		.pipe(z.number().int().positive().optional()),
	limit: z
		.string()
		.optional()
		.transform((val) => (val ? Number(val) : undefined))
		.pipe(z.number().int().positive().optional()),
	filter: z.string().optional(),
});

type TQuery = z.infer<typeof query>;

export const getAllValidation = validation({ query });

export const getAll = (req: Request<{}, {}, {}, TQuery>, res: Response) => {
	console.log(req.query);

	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: 'Não implementado!' });
};
