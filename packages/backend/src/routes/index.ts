import { Router } from 'express';

import studentRoutes from './student.routes';
import offClassRoutes from './offeredClass.routes';

const router = Router();

router.use('/student', studentRoutes);
router.use('/offClass', offClassRoutes);

export default router;
