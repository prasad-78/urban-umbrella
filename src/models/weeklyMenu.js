import mongoose from "mongoose";

var Schema = mongoose.Schema;

var weeklyMenuSchema = new Schema({
	id: {type: Number}
});

export default mongoose.model("WeeklyMenu", weeklyMenuSchema);
