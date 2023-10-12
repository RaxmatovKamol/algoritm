const db = require("../config.mongodb");
const kirim = db.collection('kirim'); // MongoDB collection



class incomeService {
    static async income(data) {
        return new Promise(async (resolve,reject) => {
            try {
                await kirim.insertOne(data);
                data.created_at = new Date();
                resolve(data);
                console.log(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static async getIncome() {
        try {
            const pipeline = [
                {
                    $group: {
                        _id: null,
                        totalSum: { $sum: "$kirimSumma" },
                    },
                },
            ];

            const result = await kirim.aggregate(pipeline).toArray();

            if (result.length > 0) {
                return result[0].totalSum;
            }

            return 0; // Agar kirimSumma mavjud bo'lmasa 0 qaytarish.
        } catch (error) {
            console.error("Xatolik:",error);
            throw error;
        }
    }

}

module.exports = incomeService;
