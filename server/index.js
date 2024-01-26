require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Api running on port "+PORT);
});

console.log(PORT);

app.listen(PORT, ()=>{
    console.log("Server running");
});