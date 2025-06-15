import { Router } from 'express';
import UserC from '../controllers/UserC';

const router = new Router();

router.post('/', UserC.create);
router.get('/', UserC.index);
router.get('/:id', UserC.show);
router.put('/:id', UserC.update);
router.delete('/:id', UserC.delete);


export default router;
