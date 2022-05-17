import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	id: {type: Number},
	title: { type: String, required: true },
	subtitle: { type: String, required: true},
	description: {type: String, required: true},
	ingredients: [{
		ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
		quantity: {type: Number, required: false},
	}],
	preperationTime: { type: String, required: true },
	cookingDifficulty: { type: String, required: true },
	utensils: { type: Array, required: true },
	tags: { type: Array},
	not_included: [{
		ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
		quantity: {type: Number, required: false}
	}],
	instructions: [{
		step: { type: String, required: true },
		stepnum: { type: Number, required: true }
	}],
	comments: { type: Array}
}, {timestamps: true});

export default mongoose.model("Recipe", RecipeSchema);
