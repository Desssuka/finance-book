import { Purse } from '../models/models'
class PurseService {
    async create(name: string, balance: number) {
        const purse = await Purse.create({
            name, balance
        })
        return purse
    }

    async delete(id: number) {
        const purse = await Purse.destroy({
            where: {
                id
            }
        })
    }

    async update(name: string, balance: number, id: number) {
        const purse = await Purse.update({ name, balance }, {
            where: {
                id
            }
        })

        return purse
    }

    async getOne(id: number) {
        const purses = await Purse.findOne({
            where: {
                id
            }
        });
        return purses
    }

    async getAll() {
        const purses = await Purse.findAll();
        return purses
    }
}

export default new PurseService();