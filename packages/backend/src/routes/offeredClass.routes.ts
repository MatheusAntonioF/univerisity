import { Router } from 'express';

import offeredClassController from '../infra/controllers/offeredClass.controller';

const routes = Router();

routes.get('/', offeredClassController.list);
routes.post('/', offeredClassController.create);

export default routes;
