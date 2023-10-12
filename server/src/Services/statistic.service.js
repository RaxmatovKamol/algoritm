// const db = require("../config.mongodb");
// const kirim = db.collection("kirim");


// class staticServise {
//     static async statistic(data) {
//         return new Promise(async (resolve,reject) => {
//             try {
//                 const { pay,kirimSumma,comment } = await data;
//                 const staticData = kirim.find({ pay,kirimSumma,comment }).toArray();
//                 resolve(staticData);
//                 resolve(data);
//             } catch (err) {
//                 console.log(err);
//                 reject(err);
//             }
//         })
//     }
// }

// module.exports = staticServise;