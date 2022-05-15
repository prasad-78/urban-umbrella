import Recipe from "../models/recipe.js";

export default function (req, res) {

	var recipe = new Recipe({
		title: req.body.title,
		subtitle: req.body.subtitle,
		description: req.body.description,
		ingredients: req.body.ingredients,
		preperationTime: req.body.preperationTime,
		cookingDifficulty: req.body.cookingDifficulty,
		utensils: req.body.utensils,
		tags: req.body.tags
	});

	recipe.save()
		.then((savedRecipe) => {
			console.log(savedRecipe, 'string saved');
			res.send(savedRecipe);
		})
		.catch((err) => {
			res.status(400).send({status: 'Error',reason: err.message});
		});

}