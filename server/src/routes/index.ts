import express from 'express';
import appointmentsRouter from './appointments';

const router = express.Router();

router.use('/appointments', appointmentsRouter);

export default router;