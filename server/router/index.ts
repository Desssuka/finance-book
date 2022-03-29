import { Router } from "express";
import purseRouter from './purse'
import expenseRouter from './expense'
import incomeRouter from './income'
import userRouter from './user'
import {auth} from '../middleware/auth'
const router =  Router();

router.use('/purse',auth,purseRouter)
router.use('/income',auth,incomeRouter)
router.use('/expense',auth,expenseRouter)
router.use('/user',userRouter)

export default router