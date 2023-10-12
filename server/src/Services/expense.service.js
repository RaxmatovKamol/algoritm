const db = require("../config.mongodb");
const chiqim = db.collection("chiqim");


class expenseService {
    static async expense(data) {
        return new Promise(async (resolve,reject) => {
            try {
                await chiqim.insertOne(data);
                data.created_at = new Date();
                resolve(data);
                console.log(expense);
            } catch (err) {
                reject(err);
            }
        })
    }

    static async getExpense(data) {
        return new Promise(async (resolve,reject) => {
            try {
                const statisticEcxpense = await chiqim.find(data).toArray();
                resolve(statisticEcxpense);
            } catch (err) { reject(err); }
        })
    }
}

module.exports = expenseService;