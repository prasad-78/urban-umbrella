import {successResponseWithData, errorResponse} from '../helpers/response.js';
import Recipe from "../models/recipe.js";

export default function (req, res) {
  Recipe.findById(req.params.id)
		.then((recipe) => {
			return successResponseWithData(res, recipe);
    })
    .catch((err) => {
      return errorResponse(res, err)
    });
}
