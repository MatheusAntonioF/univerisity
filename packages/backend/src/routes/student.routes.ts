import { Router } from 'express';

import StudentController from '../infra/controllers/student.controller';

const router = Router();

router.get('/', StudentController.list);
router.get('/:id', StudentController.show);
router.post('/', StudentController.create);
router.delete('/:id', StudentController.delete);

export default router;
