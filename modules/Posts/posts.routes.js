import { Router } from "express";
import * as postsMethods from "./posts.controller.js";
// import { addPost, getAllPosts, getSinglePost, getUserPosts, updatePost, deletePost } from "./posts.controller.js";

const postsRouter = Router();

postsRouter.route('/').post(postsMethods.addPost).get(postsMethods.getAllPosts)
postsRouter.route('/:id').get(postsMethods.getSinglePost).put(postsMethods.updatePost).delete(postsMethods.deletePost)
postsRouter.get('/me/:id', postsMethods.getUserPosts)

// postsRouter.post('/', postsMethods.addPost)
// postsRouter.get('/', postsMethods.getAllPosts)
// postsRouter.get('/:id', postsMethods.getSinglePost)
// postsRouter.get('/me/:id', postsMethods.getUserPosts)
// postsRouter.put('/:id', postsMethods.updatePost)
// postsRouter.delete('/:id', postsMethods.deletePost)



export default postsRouter;