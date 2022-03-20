const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
	departmentName: {
		type: String,
		required: true,
	},
	people: [{ type: mongoose.SchemaType.ObjectId, ref: "User" }],
	facultyId: { type: mongoose.SchemaType.ObjectId, ref: "Faculty" },
});

const departmentModel = mongoose.model("Department", departmentSchema);

module.exports = departmentModel;
