const rt = require("express").Router();



// ==========Router for Admin===========

const admin = require("./Controller/Admin.controller");
const kirim = require("./Controller/income.controller");
const chiqim = require("./Controller/expense.constroller");
const { login,signup } = require("./Validation/admin.validation")
rt.post("/signin",[signup],admin.signup);
rt.post("/login",[login],admin.login);
rt.post("/income",kirim.income);
rt.get("/get/income",kirim.getIncome);
rt.post("/expense",chiqim.expense);
rt.get("/get/expense",chiqim.getExpense);



module.exports = rt;

