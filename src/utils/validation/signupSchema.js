const Joi = require("joi");
const signUpSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{5,30}$")).required(),
    email: Joi.string().email().required(),
    birthday: Joi.date(),
    gender: Joi.string().valid("male", "female")
});

module.exports = signUpSchema;