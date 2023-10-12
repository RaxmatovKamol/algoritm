const db = require("../config.mongodb");
const user = db.collection("user");


class adminService {
    static async signup(data) {
        return new Promise(async (resolve,reject) => {
            try {
                await user.createIndex({ username: 1 },{ unique: true });
                await user.insertOne(data);
                resolve();
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    }
    static async login(data) {
        return new Promise(async (resolve,reject) => {
            try {
                const { username,password } = await data;
                const userData = user.findOne({ username,password });
                if (!userData) reject("User or password not found");
                resolve(userData);
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = adminService;