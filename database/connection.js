const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Loads .env file contents. In this case MONGO_URI and PORT environment variables
dotenv.config({ path: "./.env" });

module.exports = function (app) {
	mongoose.connect(process.env.MONGO_URI, (err) => {
		if (err) throw err;
		console.log("DB successfully connected");
	});

};
