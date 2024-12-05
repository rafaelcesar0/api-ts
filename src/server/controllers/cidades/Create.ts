import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";


const ZCidade = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").trim(),
});

type TCidade = z.infer<typeof ZCidade>;

export const create = async(req: Request<{},{}, TCidade>, res: Response) => {
	try {

		const data: TCidade = ZCidade.parse(req.body);

		res.send(data);

	} catch (error) {

		const zodError = error as z.ZodError;

		res.status(StatusCodes.BAD_REQUEST).json({
			errors: {
				dafault: zodError.errors,
			}
		})
	}
}
