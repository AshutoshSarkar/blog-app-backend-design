
import { Router } from "express";
import dummyController from "../Controllers/dummyController.js";
import createComment from "../Controllers/commentController.js";

//create instance of Router
const router = Router();


//Routes

router.get("/dummy", dummyController);
router.post("/createComment", createComment);


//export router

export default router;