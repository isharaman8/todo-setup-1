import mongoose from "mongoose";

const Schema = mongoose.Schema;
const mongooseModel = mongoose.model;

const todoSchema = new Schema(
	{
		uid: {
			type: String,
			required: true,
			unique: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		done: {
			type: Boolean,
			default: false,
		},

		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

export default mongooseModel("todo", todoSchema);
