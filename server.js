import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import mongoose from "mongoose";
import getRecipeController from "./app/controllers/getRecipeController.js";
import getRecipesController from "./app/controllers/getRecipesController.js";
import postRecipeController from "./app/controllers/postRecipeController.js";
import patchRecipeController from "./app/controllers/patchRecipeController.js";
import deleteRecipeController from "./app/controllers/deleteRecipeController.js";

const MONGO_URI = process.env.ATLAS_URI;

app.use(express.json());

app.get("/recipes", getRecipesController);

app.post("/recipe", postRecipeController);

app.get("/recipe/:id", getRecipeController);

app.patch("/recipe/:id", patchRecipeController);

app.delete("/recipe/:id", deleteRecipeController);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
