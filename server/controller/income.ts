import { NextFunction, Request, Response } from "express";
import PurseService from '../service/purse'

class IncomeController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, balance } = req.body
            const newIncome = await PurseService.create(name, balance)
            return res.status(201).json(newIncome)
        } catch (e: any) {
            next(e)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const deletedIncome = await PurseService.delete(+id)
            return res.status(200).json(deletedIncome)
        } catch (e: any) {
            next(e)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, balance, id } = req.body;
            const updatedIncome = await PurseService.update(name, balance, id);
            return res.status(200).json(updatedIncome)
        } catch (e: any) {
            next(e)
        }
    }
    
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const incomes = await PurseService.getAll();
            return res.status(200).json(incomes)
        } catch (e: any) {
            next(e)
        }
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const {id}=req.params;
            const income = await PurseService.getOne(+id);
            return res.status(200).json(income)
        } catch (e: any) {
            next(e)
        }
    }
}

export default new IncomeController();