import type { Request, Response } from "express";
import { z } from "zod";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

const params = z.object({
	id: z.string().uuid("ID Invalido"),
});

const body = z.object({
	name: z.string().min(3).trim(),
});

type TParams = z.infer<typeof params>;
type TBody = z.infer<typeof body>;

export const updateByIdValidation = validation({ params, body });

export const updateById = (req: Request<TParams, any, TBody>, res: Response) => {
	console.log(req.params);
	console.log(req.body);

	res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.json({ success: "Não implementado!" });
};
