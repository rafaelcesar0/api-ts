import type { Request, Response } from 'express';
import { z } from 'zod';
import { ensureUUID, validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

const body = z.object({
	id: z.string().uuid().optional(),
	name: z.string().min(3).trim(),
});

type TBody = z.infer<typeof body>;

export const createValidation = validation({ body });
export const createEnsureUUID = ensureUUID();

export const create = (req: Request<{}, {}, TBody>, res: Response) => {
	// if (!req.body.id) {
	// 	req.body = { id: randomUUIDv7(), ...req.body };
	// }

	console.log(req.body);

	res.status(StatusCodes.CREATED).json({ success: 'Não implementado!' });
};
