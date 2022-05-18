import mongoose from "mongoose";

var Schema = mongoose.Schema;

var weeklyMenuSchema = new Schema({
	id: { type: Number },
	startDate: { type: Date, required: true },
	recipes: [{ type: Schema.Types.ObjectId, ref: "Recipes" }]
});

export default mongoose.model("WeeklyMenu", weeklyMenuSchema);
