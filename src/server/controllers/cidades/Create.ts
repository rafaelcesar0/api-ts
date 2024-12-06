import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middleware";

const schemas = {
	body: z.object({
		nome: z.string().min(3).trim(),
		estado: z.string().min(3).trim(),
	}),
	query: z.object({
		filter: z.string().nullable(),
	})
}

export const createValidation = validation(schemas);

export const create = async (req: Request, res: Response) => {
	res.send({ success: "Criado!" });
};
