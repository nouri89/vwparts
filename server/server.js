require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");




const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/all/parts", async (req, res) => {

    try {
         const results = await db.query("SELECT * FROM part");
    console.log(results.rows);
   res.status(200).json({
       status: "success",
       number_of_results: results.rows.length,
        data:results.rows
    })
    } catch (error) {
        console.log(error);
    }



   
});
app.get("/get/one/part/:part_id", (req, res) =>{
    console.log(req.params);

        
    
});
app.post("/create/part", (req, res) =>{
    
   console.log(req.body)
});
app.put("/update/parts/:part_id", (req, res) => {
    console.log(req.params.part_id);
    console.log(req.body);
    
});
app.delete("/delete", (req, res) =>{
   
});


const port = process.env.PORT;
//const port = 3001;


app.listen(port, () => { console.log(`Server is up and listening on Port ${port}`) });