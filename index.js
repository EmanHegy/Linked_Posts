
import express from 'express';
import userRouter from './modules/Users/user.routes.js';
import postsRouter from './modules/Posts/posts.routes.js';
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/posts', postsRouter);

postsRouter

app.get('/', (req, res) => res.send("Hello in Home Page"))

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
})

