const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
	facultyName: {
		type: String,
		required: true,
	},
	people: [{ type: mongoose.SchemaType.ObjectId, ref: "User" }],
	departments: [{ type: mongoose.SchemaType.ObjectId, ref: "Department" }],
});

const facultyModel = mongoose.model("Faculty", facultySchema);

module.exports = facultyModel;
