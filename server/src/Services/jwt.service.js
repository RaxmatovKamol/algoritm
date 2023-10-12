const jwt = require("jsonwebtoken");
const salt = process.env.SALT;

class jwtService {
  static async token(data) {
    return new Promise(async (resolve,reject) => {
      try {
        const token = jwt.sign(data,salt,{ expiresIn: "20s" });
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }
}


module.exports = jwtService;