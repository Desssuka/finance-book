import {Request,Response} from 'express' 
import UserService from '../service/user'
class UserController {
    async login(req:Request,res:Response) {
        try{
            const {login,password}=req.body
            const user=await UserService.login(login,password);
            return res.status(200).json(user);
        }catch(e:any){
            return res.status(500).json(e)
        }
    }
    async registration(req:Request,res:Response) {
        try{
            const {login,password}=req.body
            const user=await UserService.registration(login,password);
            return res.status(200).json(user);
        }catch(e:any){
            return res.status(500).json(e)
        }
    }

}

export default new UserController();