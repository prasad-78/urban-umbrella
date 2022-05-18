import express from "express";
import {
	registerUser,
	loginUser,
	deleteUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.delete("/delete", deleteUser);

export default router;
