import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError, type ZodObject } from "zod";

type TProperty = "body" | "header" | "params" | "query";

type TAllSchemas = Record<TProperty, ZodObject<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {

	// const errorsResult: Record<TProperty, Record<string, string>> = {};

	Object.entries(schemas).forEach(([key, schema]) => {
		try {
			schema.parseAsync(req[key as TProperty]);
		} catch (error) {
			if (error instanceof ZodError) {
				const errors: Record<string, string> = {};
				error.errors.forEach(
					(err) => (errors[err.path[0]] = err.message)
				);

				// errorsResult[key as TProperty] = errors

				// res.status(StatusCodes.BAD_REQUEST).json({ errors });
			} else {
				// res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				// 	errors: [{ message: "Ocorreu um erro inesperado" }],
				// });
			}
		}
	});


};
