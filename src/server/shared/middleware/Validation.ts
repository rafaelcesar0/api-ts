import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError, type ZodObject } from "zod";

type TProperty = "body" | "header" | "params" | "query";

export type TSchemas = Record<TProperty, ZodObject<any>>;

type TValidation = (schemas: Partial<TSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => (req, res, next) => {
	const errorsResult: Record<string, Record<string, string>> = {};

	Object.entries(schemas).forEach(([key, schema]) => {
		try {
			schema.parse(req[key as TProperty]);
		} catch (err) {
			if (err instanceof ZodError) {
				const errors: Record<string, string> = {};
				err.errors.forEach(
					(error) => (errors[error.path[0]] = error.message)
				);

				errorsResult[key] = errors;
			}
		}
	});

	if (Object.entries(errorsResult).length > 0) {
		res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
	} else {
		next();
	}
};
