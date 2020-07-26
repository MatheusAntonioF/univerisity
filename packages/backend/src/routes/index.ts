import { Router } from 'express';

import studentRoutes from './student.routes';
import offClassRoutes from './offeredClass.routes';
import studentOfferedClassRoutes from './students_offeredClass.routes';

const router = Router();

router.use('/student', studentRoutes);
router.use('/offClass', offClassRoutes);
router.use('/student_offClass', studentOfferedClassRoutes);

export default router;
