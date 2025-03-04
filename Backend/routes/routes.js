import express from "express";
import {createflight, getflight} from "../controller/controller.js";

const router = express.Router();

router.get("/flights", getflight);
router.post("/flights", createflight);


export default router;