const adminService = require("../Services/admin.service");
const tokenServise = require("../Services/jwt.service");


class admin {

    async signup(req,res) {
        try {
            await adminService.signup(req.body);
            res.status(200).json({
                message: "Welcome to your new account",
                variant: "success",
            });
            } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                variant: "error",
                error: err,
            })
        }
    }
    async login(req,res) {
        try {
            const admin = await adminService.login(req.body);
            if (!admin) {
                return res.status(401).json({
                    message: "Invalid username or password",
                    variant: "warning",
                })
            }

            res.status(200).json({
                message: "Login successful",
                variant: "success",
                data: admin,
                token: await tokenServise.token(admin)
            })
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                variant: "error",
            })
        }
    }
}

module.exports = new admin();
