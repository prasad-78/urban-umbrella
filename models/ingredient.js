import mongoose from "mongoose";

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	title: { type: String, required: true },
	subtitle: { type: String, required: true},
	description: { type: String, required: true },
	unit: { type: String, required: true },
	fat: { type: Map, of: Number},
	energy: { type: Map, of: Number },
});

export default mongoose.model("Ingredient", IngredientSchema);