const express = require("express");
const db_connection = require("./database/connection");
const morgan = require("morgan");
const userRoutes =  require("./router/user.js");
const path =  require("path");
const researchRoutes =  require("./router/researchOutput.js");
const app = express();
const cors = require('cors');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(history());
app.use(cors({credentials: true, origin: 'http://localhost:8000'}));

//Logger
app.use(morgan("dev"));

// app.get("/", (request, response) => {
// 	response.send("SERVER IS RUNNING SUCCESSFULLY");
// });
app.use("/api/users", userRoutes);
app.use("/api/", researchRoutes);
//DB connectionff
db_connection(app);

app.use(express.static('dist/'));
app.get('/',function (req,res) {
	res.sendFile('index.html',{root: path.join(__dirname,'dist/')});
});
app.listen(port, (err) => {
	if (err) throw err;
	console.log("Server running on port:" + port);
});