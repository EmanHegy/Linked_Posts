import { dbConnection } from './../../database/dbConnection.js';
const conn = dbConnection();

const addPost = (req, res) => {
    conn.query(`INSERT INTO posts SET ?`, req.body, (err, result) => {
        if (err) return res.json(err);
        res.status(201).json({ message: "Success" })
    })
}

const getAllPosts = (req, res) => {
    conn.execute(`SELECT users.id, users.name, posts.id AS PostsId, posts.title, posts.description FROM users JOIN posts ON users.id = posts.user_id`, (err, data) => {
        res.status(200).json({ message: "Success", allPosts: data });
    })
}

const getSinglePost = (req, res) => {
    conn.execute(`SELECT users.id, users.name, posts.id AS PostsId, posts.title, posts.description FROM users JOIN posts ON users.id = posts.user_id WHERE posts.id = ${req.params.id}`, (err, data) => {
        res.status(200).json({ message: "Success", post: data });
    })
}

const getUserPosts = (req, res) => {
    conn.execute(`SELECT users.id, users.name, posts.id AS PostsId, posts.title, posts.description FROM users JOIN posts ON users.id = posts.user_id WHERE users.id = ${req.params.id}`, (err, data) => {
        res.status(200).json({ message: "Success", post: data });
    })
}
const updatePost = (req, res) => {
    conn.query(`UPDATE posts SET ? WHERE id = ?`, [req.body, req.params.id])
    res.status(200).json({ message: "Success" });
}

const deletePost = (req, res) => {
    // conn.query(`DELETE FORM posts WHERE id = ?`, req.params.id)
    conn.execute(`DELETE FROM posts WHERE id = ${req.params.id}`, (err, result) => {
        if (err) return res.json(err);
        res.status(200).json({ message: "Success" });
    })
}

export {
    addPost,
    getAllPosts,
    getSinglePost,
    getUserPosts,
    updatePost,
    deletePost
}