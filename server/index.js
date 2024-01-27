require("dotenv").config();
const express = require("express");
const router = require("./routes/productRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/ammazonne/api/v1", router);

console.log(PORT);

app.listen(PORT, ()=>{
    console.log("Server running");
});