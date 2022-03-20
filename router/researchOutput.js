const express = require("express");
const Router = express.Router();
const {auth}   = require("../middleware/auth.js");
const controller = require("../controllers/file.controller");
const {
	fetchResearchOutputs,
	searchResearchOutputs,
	fetchSingleResearchOutput,
	createResearchOutput,
	updatedResearchOutput,
	deleteResearchOutput,
} = require("../controllers/researchOutputController");

//Once authentication is implemented, we'll add it to the routes
Router.get("/research-outputs" ,fetchResearchOutputs);
Router.get("/research-outputs/search",auth ,searchResearchOutputs);
Router.get("/research-outputs/:id", auth,fetchSingleResearchOutput);
Router.post("/research-outputs/create",auth, createResearchOutput);
Router.patch("/research-outputs/update/:id",auth, updatedResearchOutput);
Router.delete("/research-outputs/delete/:id", auth,deleteResearchOutput);
Router.post("/upload", controller.upload);
Router.get("/files", controller.getListFiles);
Router.get("/files/:name", controller.download);

module.exports = Router;
