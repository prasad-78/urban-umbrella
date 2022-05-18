import Recipe from "../models/recipe.js";
import {
  errorResponse,
  successResponseWithData,
  validationErrorWithData,
  createResponse,
  noContentResponse,
} from "../helpers/response.js";

export default class RecipeData {}

export function recipeList(req, res) {
  Recipe.find({})
    .then((allRecipes) => {
      return successResponseWithData(res, allRecipes);
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export function recipeDetail(req, res) {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      return successResponseWithData(res, recipe);
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export function recipeCreate(req, res) {
  var recipe = new Recipe({
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    ingredients: req.body.ingredients,
    preperationTime: req.body.preperationTime,
    cookingDifficulty: req.body.cookingDifficulty,
    utensils: req.body.utensils,
    tags: req.body.tags,
  });

  recipe
    .save()
    .then((savedRecipe) => {
      return createResponse(res, savedRecipe);
    })
    .catch((err) => {
      return validationErrorWithData(res, err);
    });
}

export function recipeUpdate(req, res) {
  let body = req.body;
  Recipe.findByIdAndUpdate(req.params.id, body, { new: true, upsert: false })
    .then((updatedRecipe) => {
      successResponseWithData(res, updatedRecipe);
    })
    .catch((err) => {
      errorResponse(res, err);
    });
}

export function recipeDelete(req, res) {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (recipe === null) {
        return noContentResponse(res);
      }
      Recipe.findByIdAndDelete(req.params.id)
        .then(() => {
          return noContentResponse(res);
        })
        .catch((err) => {
          return errorResponse(res, err);
        });
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}
