import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as update from './UpdateById';
import * as del from './DeleteById';

export const CidadesController = { ...create, ...getAll, ...getById, ...update, ...del };
