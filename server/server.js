require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const path = require("path");
const app = express();
//app.use(express.json());
app.use(morgan("dev"));

//process.env.NODE.ENV => production or undefined
app.use(morgan("dev"));
//app.use("/",express.static( "./client"));
//if (process.env.NODE.ENV === "production") {
//  app.use(express.static(path.join(__dirname, "client/index.html")))

//}
//console.log(path.join(__dirname, "client/index.html"));

app.get("/all/parts", async (req, res) => {
	try {
		const results = await db.query("SELECT * FROM part");
		console.log(results.rows);
		res.status(200).json({
			status: "success",
			number_of_results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error);
	}
});
app.get("/searchonepart", async (req, res) => {
	try {
		const { searched_part } = req.query;

		const results = await db.query(
			"SELECT  part_name,part_reference_number ,fit_cars,year_of_use,part_photo_link FROM part WHERE part_name || part_reference_number ILIKE $1 ",
			[`%${searched_part}%`]
		);
		console.log(results.rows);
		res.status(200).json({
			status: "success",
			number_of_results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error);
	}
});
app.get("/get/one/part/:part_id", (req, res) => {
	console.log(req.params);
});
app.get("/searched/part", (req, res) => {
	const found_part = await;
	console.log(req.params);
});
app.post("/create/part", (req, res) => {
	console.log(req.body);
});
app.put("/update/parts/:part_id", (req, res) => {
	console.log(req.params.part_id);
	console.log(req.body);
});
app.delete("/delete", (req, res) => {});

const port = process.env.PORT || 3006;
//const port = 3001;

app.listen(port, () => {
	console.log(`Server is up and listening on Port ${port}`);
});
