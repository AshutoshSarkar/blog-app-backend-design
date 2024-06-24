
import { Router } from "express";
import dummyController from "../Controllers/dummyController.js";
import createComment from "../Controllers/commentController.js";
import { createPost } from "../Controllers/postController.js";
import { getPosts } from "../Controllers/postController.js";
import { likePost } from "../Controllers/likeController.js";
import { unlikePost } from "../Controllers/likeController.js";
//create instance of Router
const router = Router();


//Routes

router.get("/dummy", dummyController);
router.post("/createComment", createComment);
router.post("/createPost",createPost);
router.get("/getPosts",getPosts);
router.post("/likepost",likePost);
router.post("/unlikepost",unlikePost);
//export router

export default router;