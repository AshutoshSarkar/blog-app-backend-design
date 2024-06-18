
import { Router } from "express";
import dummyController from "../Controllers/dummyController.js";

//create instance of Router
const router = Router();


//Routes

router.get("/dummy", dummyController);


//export router

export default router;