import type { Request, Response } from "express";
import { z } from "zod";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


const body = z.object({
	nome: z.string().min(3).trim(),
})

type TBody = z.infer<typeof body>

export const createValidation = validation({body});

export const create = (req: Request<{}, {}, TBody>, res: Response) => {
	console.log(req.body);

	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: "Não implementado!" });
};
