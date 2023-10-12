const expenseService = require("../Services/expense.service");


class chiqim{
    async expense(req,res) {
        try {
            await expenseService.expense(req.body);
            res.status(200).json({
                message: "Chiqim qilindi",
                variant:"success",
            })
         } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                variant: "error",
                error:err,
            })
         }
    }
    async getExpense(req,res) {
        try {
            res.status(200).json({
                message: "Chiqim malumotlari yuklandi",
                variant: "success",
                chiqim: await expenseService.getExpense(),
            })
        } catch (err) { 
            res.status(500).json({
                message: "Something went wrong",
                variant: "error",
                error:err,
            })
         }
    }
}

module.exports = new chiqim();