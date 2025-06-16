import { Router } from 'express';
import UserC from '../controllers/UserC';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
// router.get('/', loginRequired, UserC.index); // Lista usuários
// router.get('/:id', UserC.show); // Lista um usuário

router.post('/', UserC.create);
router.put('/', loginRequired, UserC.update);
router.delete('/', loginRequired, UserC.delete);

export default router;
