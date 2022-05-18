import express from "express";
import {
	ingredientList,
	ingredientDetail,
	ingredientCreate,
	ingredientUpdate,
	ingredientDelete,
} from "../controllers/ingredient.js";

const router = express.Router();

router.get("/", ingredientList);

router.post("/", ingredientCreate);

router.get("/:id", ingredientDetail);

router.patch("/:id", ingredientUpdate);

router.delete("/:id", ingredientDelete);

export default router;
