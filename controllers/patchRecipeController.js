import { successResponseWithData, validationErrorWithData, createResponse } from '../helpers/response.js';
import Recipe from "../models/recipe.js";

export default function (req, res) {
  let body = req.body;
  Recipe.findByIdAndUpdate(req.params.id, body, { new: true, upsert: false })
    .then((updatedRecipe) => {
			successResponseWithData(res, updatedRecipe);
    })
    .catch((err) => {
			errorResponse(res, err);
    });
}
