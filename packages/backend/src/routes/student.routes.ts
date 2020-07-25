import { Router } from 'express';

import StudentController from '../infra/controllers/student.controller';

const router = Router();

router.post('/', StudentController.create);

export default router;
