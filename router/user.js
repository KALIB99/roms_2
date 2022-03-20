const express = require("express");
const Router = express.Router();

const { userLogin, createUser, updateUser , findAllUsers ,findById, Delete,count} = require("../controllers/userController.js");
const {auth}   = require("../middleware/auth.js");
Router.post("/login", userLogin);
Router.post("/createUser", auth,createUser);
Router.post("/updateUser", auth,updateUser);
Router.post("/findAll",auth, findAllUsers);
Router.get("/findByID", auth,findById);
Router.get("/DeleteById", auth,Delete);
Router.get("/count",count);

module.exports =  Router;