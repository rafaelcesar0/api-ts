import { setErrorMap } from 'zod';

// Configuração de mensagens de erro personalizadas em português para Zod
setErrorMap((issue, ctx) => {
	if (issue.code === 'invalid_type') {
		if (issue.received === 'undefined') {
			return { message: 'Este campo é obrigatório' };
		}
		return { message: 'Formato digitado é inválido' };
	}

	if (issue.code === 'too_small') {
		if (issue.type === 'string') {
			return { message: `Deve ter pelo menos ${issue.minimum} caracteres` };
		}
		if (issue.type === 'number') {
			return { message: `Deve ser maior que ${issue.minimum}` };
		}
		if (issue.type === 'array') {
			return { message: `Deve ter no mínimo ${issue.minimum} itens` };
		}
	}

	if (issue.code === 'too_big') {
		if (issue.type === 'string') {
			return { message: `Deve ter no máximo ${issue.maximum} caracteres` };
		}
		if (issue.type === 'number') {
			return { message: `Deve ser no máximo ${issue.maximum}` };
		}
		if (issue.type === 'array') {
			return { message: `Deve ter no máximo ${issue.maximum} itens` };
		}
	}

	if (issue.code === 'invalid_string') {
		if (issue.validation === 'email') {
			return { message: 'Formato de e-mail digitado não é válido' };
		}
		if (issue.validation === 'url') {
			return { message: 'Deve ter um formato de URL válida' };
		}
	}

	if (issue.code === 'invalid_enum_value') {
		return { message: 'Deve ser um dos seguintes valores' };
	}

	if (issue.code === 'not_multiple_of') {
		return { message: `Deve ser múltiplo de ${issue.multipleOf}` };
	}

	// Mensagens genéricas para outros casos
	return { message: ctx.defaultError };
});
