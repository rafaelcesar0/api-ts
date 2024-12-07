import type { NextFunction, Request, Response } from 'express';

type TStringEncoding = 'hex' | 'base64' | 'base64url';
type TBufferEncoding = 'buffer';
type TEncoding = TStringEncoding | TBufferEncoding;

// Função helper para type narrowing
const isBufferEncoding = (encoding: TEncoding | undefined): encoding is TBufferEncoding => {
	return encoding === 'buffer';
};

// Middleware para adicionar UUID se não existir no body
export const ensureUUID = (encoding?: TEncoding) => (req: Request, _: Response, next: NextFunction) => {
	try {
		const body = req.body;

		if (!body.id) {
			if (isBufferEncoding(encoding)) {
				body.id = Bun.randomUUIDv7(encoding);
			} else {
				body.id = Bun.randomUUIDv7(encoding as TStringEncoding);
			}
		}

		req.body = body;
		return next();
	} catch (error) {
		return next({
			status: 400,
			message: 'Invalid request body',
		});
	}
};
