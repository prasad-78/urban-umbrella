import { errorResponse, noContentResponse } from "../helpers/response.js";
import Recipe from "../models/recipe.js";

export default function (req, res) {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (recipe === null) {
        return noContentResponse(res);
      }
      Recipe.findByIdAndDelete(req.params.id)
        .then((deletedRecipe) => {
          res.send(deletedRecipe);
        })
        .catch((err) => {
          return errorResponse(res, err);
        });
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}
