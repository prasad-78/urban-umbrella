import mongoose from "mongoose";

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	id: {type: Number},
	title: { type: String, required: true },
	subtitle: { type: String, required: true},
	description: {type: String, required: true},
	ingredients: { type: Schema.Types.ObjectId, ref: "Ingredient" , required: false },
	preperationTime: { type: String, required: true },
	cookingDifficulty: { type: String, required: true },
	utensils: { type: Array, required: true },
	tags: { type: Array},
	not_included: { type: Array, ref: "Ingredient" },
	comments: { type: Array}
}, {timestamps: true});

export default mongoose.model("Recipe", RecipeSchema);