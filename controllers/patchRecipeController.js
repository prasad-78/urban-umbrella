import Recipe from "../models/recipe.js";

export default function (req, res) {
  let body = req.body;

  Recipe.findByIdAndUpdate(req.params.id, body, { new: true, upsert: true })
    .then((updatedRecipe) => {
      res.send(updatedRecipe);
    })
    .catch((err) => {
      res.error(err);
    });
}
