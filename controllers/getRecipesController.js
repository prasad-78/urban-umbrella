import {successResponse, errorResponse} from '../helpers/response.js';
import Recipe from "../models/recipe.js";

export default function (req, res) {

	Recipe.find({})
		.then((allRecipes) => {
			return successResponse(res, allRecipes);
		})
		.catch((err) => {
			return errorResponse(res, err)
		});
}