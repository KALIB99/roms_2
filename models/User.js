const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		lastname: { type: String, required: true },
		dob: String,
		departmentId: { type: String },
		facultyID: { type: String },
		research_outputs: { type: mongoose.Schema.Types.ObjectId, ref: "Research_Output" },
		
	},
	{ timeStamps: true ,strict:false }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
