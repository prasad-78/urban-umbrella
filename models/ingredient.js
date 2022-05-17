import mongoose from "mongoose";

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	id: {type: Number},
	title: { type: String, required: true },
	description: { type: String, required: true },
	unitOfMeasure: { type: String, required: true },
	fat: { type: Map, of: Number},
	energyPerUnit: { type: Map, of: Number },
	ofWhichSaturates: { type: Map, of: Number },
	carbohydrate: { type: Map, of: Number },
	ofWhichSugars: { type: Map, of: Number },
	dietaryFibre: { type: Map, of: Number },
	protein: { type: Map, of: Number },
	cholesterol: { type: Map, of: Number },
	sodium: { type: Map, of: Number }
});

export default mongoose.model("Ingredient", IngredientSchema);