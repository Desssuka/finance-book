import { NextFunction, Request, Response } from "express";
import PurseService from '../service/purse'

class PurseController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, balance } = req.body
            const newPurse = await PurseService.create(name, balance)
            return res.status(201).json(newPurse)
        } catch (e: any) {
            next(e)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const deletedPurse = await PurseService.delete(+id)
            return res.status(200).json(deletedPurse)
        } catch (e: any) {
            next(e)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, balance, id } = req.body;
            const updatedPurse = await PurseService.update(name, balance, id);
            return res.status(200).json(updatedPurse)
        } catch (e: any) {
            next(e)
        }
    }
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const purses = await PurseService.getAll();
            return res.status(200).json(purses)
        } catch (e: any) {
            next(e)
        }
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const {id}=req.params;
            const purse = await PurseService.getOne(+id);
            return res.status(200).json(purse)
        } catch (e: any) {
            next(e)
        }
    }
}

export default new PurseController();