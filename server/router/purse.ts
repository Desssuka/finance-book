import { Router } from "express"
import purseController from '../controller/purse';
const router =  Router();

router.post('/',purseController.create)
router.delete('/',purseController.delete)
router.put('/',purseController.update)
router.get('/',purseController.getAll)
router.get('/:id',purseController.getOne)

 export default router;