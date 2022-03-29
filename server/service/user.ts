import {User} from '../models/models'
import  bcrypt from 'bcrypt';
import user from '../controller/user';

class UserService {
    async login(login:string,password:string){
        const candidate=await User.findOne({
            where:{
                login,
                password
            }
        })
        if(!candidate){
            throw new Error('user not found')
        }
        const isRightPassword=bcrypt.compare(password,candidate.password);
        if(!isRightPassword){
            throw new Error('password or login is wrong')
        }
        return user;
    }

    async registration(login:string,password:string){
        const candidate=await User.findOne({
            where:{
                login,
            }
        })
        if(candidate){
            throw new Error('user already  exist with login')
        }
        const hash=bcrypt.hash(password,4);
        const newUser=await User.create({
            login,password
        })
        return newUser;
    }
}

export default new UserService();