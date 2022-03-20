const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const secret = process.env.JWT_SECRET;

const Research_Output = require("../models/Research_Output");
const User = require("../models/User.js");

exports.userLogin = async (req, res) => {
	const { username, password } = req.body;
	console.log(password);
	try {
		const user = await User.findOne({ username });

		if (!user) {
			
			return res.status(404).send("Incorrect username or Password");
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.status(404).send("Incorrect username or Password");
		}
		const payload = {user : { id: user._id, username: user.username ,role : user.role }};
		const accessToken = jwt.sign(payload, secret, {
			expiresIn: "1h",
		});

			
         //console.log({ user,accessToken ,userCount,researchCount, message: "Logged in" });
		res.status(200).json({ user,accessToken , message: "Logged in" });
	} catch (err) {
		console.log(err);
		res.status(500).send(err.toString());
	}
};
//count 
exports.count = async (req, res) => {

	try {
		
		var userCount =await User.countDocuments({});
		var researchCount = await Research_Output.countDocuments({});
		var computinginformaticsCount = await Research_Output.countDocuments({department:"Computing & Informatics"});
		var engineeringCount = await Research_Output.countDocuments({department:"Engineering"});
		var healthappliedCount = await Research_Output.countDocuments({department:"Health & Applied Sciences"});
		var humanssciencesCount = await Research_Output.countDocuments({department:"Human Sciences"});
		var managementsciencesCount = await Research_Output.countDocuments({department:"Management Sciences"});
		var naturalresourcesCount = await Research_Output.countDocuments({department:"Natural Resources & Spatial Sciences"});
		
		res.status(200).json({ userCount,researchCount,computinginformaticsCount,engineeringCount,healthappliedCount,humanssciencesCount,managementsciencesCount,naturalresourcesCount });
	} catch (err) {
		console.log(err);
		res.status(500).send(err.toString());
	}
};
// create user
exports.createUser = async (req, res) => {
	const { username, role, firstname,lastname,dob,departmentId,facultyID, password, confirmPassword } = req.body;

	let user = new User({
		firstname ,
		lastname,
		username,
		password,
		dob,
		departmentId,
		facultyID,
		role,
	});

	if (password !== confirmPassword)
		return res.status(400).send("Password don't match");

	try {
		const userExists = await User.findOne({ username });

		if (userExists) {
			return res.status(400).send("User already exists.");
		}

		user.password = await bcrypt.hash(password, 12);

		await user.save();
		const payload = { id: user._id, email: user.email , role:user.role };
		const token = jwt.sign(payload, secret, {
			expiresIn: "1h",
		});

		res.status(201)
			.json({ user, message: "Account created successfully" });
	} catch (error) {
		res.status(500).send(error.toString());
	}
};
// update user
exports.updateUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).send("No user found with that id");
	
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				...req.body
			},
			{ new: true }
		);

		return res.status(200).json({ updatedUser, message: "User updated" });
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};
//select all users
exports.findAllUsers = async (req, res) => {
	try {
		const user = await User.find({}).populate({path:'research_outputs'});
		if (!user) return res.status(404).send("No user in database");
	
		
		return res.status(200).json({ user  });
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};
//find users by id 
exports.findById = async (req, res) => {
	try {
		const user = await User.findById(req.query.id);
		
		
		if (!user) return res.status(404).send("No user in database");
	
		
		return res.status(200).json({ user  });
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};

//find users by id 
exports.Delete = async (req, res) => {
	try {
		
		User.findByIdAndRemove(req.query.id,req.body, function(err,data)
			{
				if(!err){
					return res.status(200).json({ message:"Deleted Succesfully"  });
				}else{
					return res.status(404).json({ message:"Failed to delete"  });
				}
			});
		
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};