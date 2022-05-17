import express from "express";
import {
  recipeList,
  recipeDetail,
  recipeCreate,
  recipeUpdate,
  recipeDelete,
} from "../controllers/recipe.js";

const router = express.Router();

router.get("/", recipeList);

router.post("/", recipeCreate);

router.get("/:id", recipeDetail);

router.patch("/:id", recipeUpdate);

router.delete("/:id", recipeDelete);

export default router;
