const mongoose = require("mongoose");

const researchSchema = mongoose.Schema({
	publicationType: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	eventTitle: String,
	publicationDate: {
		type: Date,
		default: Date.now,
	},
	apaStyle: String,
	department: String,
	mainSupervisor: String,
	coSupervisor: String,
	abstract: String,
	sdggoal: String,
	level: String,
	conferencePaper: String,
	research_link: String,
	reviews: { type: String, required: true },
	file: String,
	userId: { type: mongoose.Schema.Types.ObjectId ,ref: 'User' },
}
);

const researchModel = mongoose.model("Research_Output", researchSchema);

module.exports = researchModel;
