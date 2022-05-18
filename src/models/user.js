import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	id: { type: String},
	firstName: { type: String, default: null },
	lastName: { type: String, default: null },
	email: { type: String, unique: true },
	password: { type: String },
	token: { type: String }
});

export default mongoose.model("User", UserSchema);