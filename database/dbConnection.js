import mysql from "mysql2";
export const dbConnection = () => {
    const conn = mysql.createConnection('mysql://uvujujbv3gvt1llu:9tMuey9ydoovNdhnZDmL@bid1xp4zfedvq2li5ilo-mysql.services.clever-cloud.com:3306/bid1xp4zfedvq2li5ilo')
    // {host: "localhost",
    // user: "root",
    // password: "",
    // database: "linked_posts"}

    conn.connect((err) => {
        if (err) return console.log("DataBase error");
        console.log("Database connected Successfully.");
    })

    return conn
}