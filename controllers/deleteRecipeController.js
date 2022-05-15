import Recipe from "../models/recipe.js";

export default function (req, res) {
  Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe) => {
      res.send(deletedRecipe);
    })
    .catch((err) => {
      res.error(err);
    });
}
