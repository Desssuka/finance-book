import sequelize from '../db'
import { Model, DataTypes } from '@sequelize/core';

class User extends Model {
    declare id: number;
    declare login: string;
    declare password: string
}

class Purse extends Model {
    declare id: number;
    declare name: string;
    declare balance: number
}

class Income extends Model {
    declare id: number;
    declare name: string;
    declare value: number
}

class Expense extends Model {
    declare id: number;
    declare name: string;
    declare value: number
}
User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    tableName: 'users'
})

Income.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    tableName: 'incomes'
})

Expense.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    tableName: 'expenses'
})

Purse.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'purses',
    sequelize: sequelize
})

User.hasMany(Purse);
Purse.belongsTo(User)

Purse.hasMany(Expense)
Expense.belongsTo(Purse)

Purse.hasMany(Income)
Income.belongsTo(Purse)

export { Purse, Expense, Income,User };
