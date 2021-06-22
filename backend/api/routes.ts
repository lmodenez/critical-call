import { Router } from 'express';

import ticketsController from './app/controllers/TicketsController';

const router = Router();

router.get('/tickets', ticketsController.get);
router.post('/tickets', ticketsController.post);
router.post('/tickets/:id', ticketsController.delete);

export default router;
