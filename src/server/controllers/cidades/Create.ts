import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middleware";

const schemas = {
	body: z.object({
		nome: z.string().min(3).trim(),
		estado: z.string().min(3).trim(),
	}),
}

export const createValidation = validation(schemas);

export const create = (_: Request, res: Response) => {
	res.send({ success: "Criado!" });
};
