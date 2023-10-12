const incomeService = require("../Services/income.service");


class kirim {
    async income(req,res) {
        try {
            await incomeService.income(req.body);
            res.status(200).json({
                message: "Kirim qilindi",
                vaiant: "success",
            });
            console.log(req.body);
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                variant: "error",
                error: err,
            })
        }
    }

    async getIncome(req,res) {
        try {
            res.status(200).json({
                message: "Kirim puli umumiy tushumga qo'shildi",
                variant: "success",
                kirim: await incomeService.getIncome(req.body),
            })
        } catch (err) {
            res.status(500).json({
                message: "Something went wrong",
                variant: "error",
                error: err,
            })
        }
    }


}
module.exports = new kirim();



// const MyModel = mongoose.model("MyModel",{
//     count: Number, // Count ni saqlash uchun Number turini tanlaymiz
// });

// // Qiymatni increment qilish uchun endpoint
// app.put("/increment",async (req,res) => {
//     try {
//         // MongoDB-dan joriy qiymatni o'qish
//         const doc = await MyModel.findOne({});
//         // Joriy qiymatni o'zgartiramiz
//         doc.count += 1;
//         // O'zgargan qiymatni MongoDB-ga saqlash
//         await doc.save();
//         res.json({ message: "Qiymat muvaffaqiyatli o'zgartirildi." });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Xatolik yuz berdi." });
//     }
// });