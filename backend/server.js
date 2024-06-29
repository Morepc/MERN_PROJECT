const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const notes = require('./Data/notes')
const dotenv=require('dotenv');

const connectDB =require("./config/db")

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Api is running!");
});

	app.get("/api/notes",(req,res)=>{
 res.json(notes)
	})

app.get("/api/notes/:id",(req,res)=>{
 const note= notes.find((n)=>n._id===req.params.id)
res.send(note)
  })

 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });



