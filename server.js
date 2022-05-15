import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import mongoose from "mongoose";
import getRecipeController from "./controllers/getRecipeController.js";
import getRecipesController from "./controllers/getRecipesController.js";
import postRecipeController from "./controllers/postRecipeController.js";
import patchRecipeController from "./controllers/patchRecipeController.js";
import deleteRecipeController from "./controllers/deleteRecipeController.js";

const MONGO_URI = process.env.ATLAS_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then()
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;

app.use(express.json());

app.get("/recipes", getRecipesController);

app.post("/recipe", postRecipeController);

app.get("/recipe/:id", getRecipeController);

app.patch("/recipe/:id", patchRecipeController);

app.delete("/recipe/:id", deleteRecipeController);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
