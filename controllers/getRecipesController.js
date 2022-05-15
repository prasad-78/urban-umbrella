import Recipe from "../models/recipe.js";

export default function (req, res) {

	Recipe.find({})
		.then((allRecipes) => {
			console.log(allRecipes);
			res.send(allRecipes);
		})
		.catch((err) => {res.error(err);});
}