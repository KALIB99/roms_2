const Research_Output = require("../models/Research_Output");
const slugify = require("slugify");
const mongoose = require("mongoose");
const moment = require('moment');

const config = {
	replacement: "-",
	remove: undefined,
	lower: true,
	strict: true,
	locale: "en",
};

//Fetch research outputs
exports.fetchResearchOutputs = async (req, res) => {
	try {
		const outputs = await Research_Output.find({}).sort({
			publicationDate: -1,
		}).populate({path:'userId',select:['firstname','lastname']}); //Sort by the most recent publication date
	   var newobject =	outputs.map(function (value, label) {
			if (label == "publicationDate"){
				newobject.publicationDate = moment(value);
			}
			return value * value;
		});
		return res.status(200).json(outputs);
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};

//Search research outputs by categories such as author name, publication date, title...
exports.searchResearchOutputs = async (req, res) => {
	Research_Output.createIndex({ author: "text" });
	const { author, publication_date, title } = req.query;
	try {
		const outputs = await Research_Output.find({
			$or: [
				{ $text: { $search: new RegExp(author, "i") } },
				{ publicationDate: publication_date },
				{ slug: new RegExp(title, "i") },
			],
		}).sort({ publicationDate: -1 }); //Sort by the most recent publication date

		return res.status(200).json(outputs);
	} catch (error) {
		return res.status(500).status("Internal Server Error");
	}
};

//Fetch single research output
exports.fetchSingleResearchOutput = async (req, res) => {
	try {
		const output = await Research_Output.findById(req.params.id);

		if (!output) {
			return res.status(404).send("No research output found with that id");
		}

		return res.status(200).json(output);
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};

//Create research output
exports.createResearchOutput = async (req, res) => {

	if (!req.user) {
		return res.status(401).send("Anauthenticated");
	}

	if (
		req.user &&
		(req.user.role !== "admin" && req.user.role !== "editor")
	) {
		return res
			.status(403)
			.send("Forbidden! You can't perform this operation. Contact your admin!");
	}
		console.log(req.body)		
	let output = new Research_Output({
		...req.body,
		creator: mongoose.Types.ObjectId(req.user.id),
		slug: slugify(req.body.title, config),
	}); //creator field which identifies the user who will add the research, will be added once authentication is implemented -> creator: req.user.id

	try {
		output = await output.save();

		return res.status(201).json(output);
	} catch (error) {
		console.log(error)		
		return res.status(500).send("Internal Server Error");
	}
};

//Update research output
exports.updatedResearchOutput = async (req, res) => {
	if (!req.user) {
		return res.status(401).send("Anauthenticated");
	}
    console.log(req.body);
	
	if (
		req.user &&
		(req.user.role !== "admin" && req.user.role !== "editor" )
	) {
		return res
			.status(403)
			.send("Forbidden! You can't perform this operation. Contact your admin!");
	}
	try {
		let output = await Research_Output.findById(req.params.id);

		if (!output) {
			return res.status(400).send("No research output found with that id");
		}

		output = await Research_Output.findByIdAndUpdate(
			req.params.id,
			{
				...req.body,
				updatedAt: new Date().toISOString(),
			},
			{ new: true }
		);

		return res.status(200).json(output);
	} catch (error) {
		console.log(error);
		return res.status(500).send("Internal Server Error");
	}
};

//Delete research output
exports.deleteResearchOutput = async (req, res) => {
	if (!req.user) {
		return res.status(401).send("Anauthenticated");
	}

	if (
		req.user &&
		(req.user.role !== "admin" || req.user.role !== "researcher")
	) {
		return res
			.status(403)
			.send("Forbidden! You can't perform this operation. Contact your admin!");
	}

	try {
		const output = await Research_Output.findById(req.params.id);

		if (!output) {
			return res.status(400).send("No research output found with that id");
		}

		await Research_Output.findByIdAndRemove(req.params.id);

		return res.status(200).send("Research output deleted successfully");
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};
