import { Router } from 'express';

import foto from '../controllers/Foto';

const router = new Router();

router.post('/', foto.store);

export default router;
