import Joi from 'joi';
import { dbConnection } from './../../database/dbConnection.js';
import * as bcrypt from 'bcrypt';
const connection = dbConnection();

// const signupVal = Joi.object({
//     name: Joi.string().min(2).max(50).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().pattern(/^[A-Z][A-Za-z0-9]{7,50}$/).required(),
//     rePassword: Joi.valid(Joi.ref('password')).required(),
//     age: Joi.number().min(10).max(80).required()
// })

const signup = (req, res) => {
    // let {error} = signupVal.validate(req.body,{abortEarly:false}) 
    // res.json(error) 

    const { name, email, password } = req.body;
    connection.execute(`INSERT INTO users (name,email,password) VALUES('${name}','${email}','${password}')`)

    connection.query('INSERT INTO users SET ?', req.body);
    res.status(201).json({ message: "Success" });
}
const signin = (req, res) => {
    connection.execute(`SELECT id, email, password FROM users WHERE email = '${req.body.email}';`, (err, data) => {
        if (err) res.json(err);
        if (data.length != 0) {
            let match = bcrypt.compareSync(req.body.password, data[0].password)
            if (match) {
                res.json({ message: "Login...token", userId: data[0].id });
            } else {
                res.status(401).json({ message: "Password incorrect" });
            }
        } else {
            res.status(401).json({ message: "account not found" });
        }
    })
}

export {
    signup,
    signin
}