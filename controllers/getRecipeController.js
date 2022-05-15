import Recipe from "../models/recipe.js";

export default function (req, res) {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      res.send(recipe);
    })
    .catch((err) => {
      res.error(err);
    });
}
