import { dbConnection } from "../database/dbConnection.js";
import bcrypt from 'bcrypt';


const connection = dbConnection();


export const checkEmail = (req, res, next) => {
    connection.execute(`SELECT email FROM users WHERE email = '${req.body.email}';`, (err, data) => {
        if (err) res.json(err);
        if (data.length != 0) return res.status(409).json({ message: "This email aleady exists" });
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        next()
    })
}