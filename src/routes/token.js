import { Router } from 'express';
import token from '../controllers/Token';

const router = new Router();

router.post('/', token.store)

export default router;
