import express from "express";
import recipeRouter from "./recipe.js";
import ingredientRouter from "./ingredient.js";
import userRouter from "./user.js";

var app = express();

app.use("/recipes/", recipeRouter);
app.use("/ingredients/", ingredientRouter);
app.use("/user/", userRouter);

export default app;
