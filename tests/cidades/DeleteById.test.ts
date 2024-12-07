import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - DeleteById', () => {
	it('Apagar registro', async () => {
		const res1 = await testServer.post('/cidades').send({
			name: 'Fortaleza'
		});
		expect(res1.statusCode).toEqual(StatusCodes.CREATED);

		const res1Delete = await testServer.post(`/cidades/${res1.body.id}`).send();


		expect(res1Delete.statusCode).toEqual(StatusCodes.NO_CONTENT);
	});
	it('Tentar apagar registro que não existe', async () => {
		const res1 = await testServer.delete('/cidades/99999').send();

		expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
		expect(res1.body).toHaveProperty('errors.params.id');
	});
})
