import {Router} from 'express';
import UserController from '../controller/user'
const router=Router();
router.post('/login',UserController.login)
router.post('/registr',UserController.registration)
export default router