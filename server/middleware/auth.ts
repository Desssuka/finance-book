import {Request,Response,NextFunction} from 'express'
export const auth=(req:Request,res:Response,next:NextFunction)=> {
    if(!req.headers.authorization){
        throw new Error('not autorized');
    }
    const authId=req.headers.authorization.split(' ')[1];
    if(!authId){
        throw new Error('not autorized');
    }

    req.user = '';
    next();
}