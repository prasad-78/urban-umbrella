import mongoose from "mongoose";

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	id: {type: Number},
	title: { type: String, required: true },
	description: { type: String, required: true },
	unitOfMeasure: { type: String, required: true },
	fat: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	energyPerUnit: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	ofWhichSaturates: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	carbohydrate: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	ofWhichSugars: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	dietaryFibre: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	protein: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	cholesterol: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	},
	sodium: {
		unitOfMeasure: { type: String, required: false},
		value: { type: Number, required: false },
	}
});

export default mongoose.model("Ingredient", IngredientSchema);