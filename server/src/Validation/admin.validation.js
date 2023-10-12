const AJV = require("ajv");
const ajv = new AJV();



class adminValidation {
    static async check(schema,data) {

        return new Promise((resolve,reject) => {
            try {
                const error = ajv.validate(schema,data);
                console.log(error);

                if (!error) return reject(ajv.errorsText());
                resolve(null);
            } catch (err) {
                reject(err);
            }
        })
    }
    static async signup(req,res,next) {
        const schema = {
            type: "object",
            properties: {
                fullname: {
                    type: "string",
                    minLength: 3,
                    maxLength: 20,
                    pattern: "^[a-zA-Z0-9]*$",
                },
                username: {
                    type: "string",
                    minLength: 5,
                    maxLength: 20,
                    pattern: "^[a-zA-Z0-9]*$",
                },
                password: {
                    type: "string",
                    minLength: 5,
                    maxLength: 20,
                    pattern: "^[a-zA-Z0-9]*$",
                }
            },

            required: ["fullname","username","password"],
            additionalProperties: false,

        };

        try {
            const data = await req.body;
            await adminValidation.check(schema,data);
            next();
        } catch (err) {
            res.status(400).json({
                message: err,
                variant: "error"
            })
        }

    }
    static async login(req,res,next) {
        const data = req.body;
        const schema = {
            type: "object",
            properties: {
                username: {
                    type: "string",
                    minLength: 5,
                    maxLength: 20,
                    pattern: "^[a-zA-Z0-9]*$",
                },
                password: {
                    type: "string",
                    minLength: 5,
                    maxLength: 20,
                    pattern: "^[a-zA-Z0-9]*$",
                }
            },

            additionalProperties: false,
            required: ["username","password"],

        };

        try {
            const error = await adminValidation.check(schema,data);
            if (!error) {
                next();
            } else {
                res.status(401).json({
                    message: "Invalid username or password",
                    variant: "warning",
                    error: err,
                })
            }


        } catch (err) {
            res.status(500).json({
                message: "Validation error",
                variant: "error",
                error: err,
            })

        }
    }

}

module.exports = adminValidation;