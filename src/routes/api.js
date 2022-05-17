import express from "express";
import recipeRouter from "./recipe.js";
import ingredientRouter from "./ingredient.js";

var app = express();

app.use("/recipes/", recipeRouter);
app.use("/ingredients/", ingredientRouter);

export default app;
