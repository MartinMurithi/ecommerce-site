require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require("./routes/productRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());
app.use("/ammazonne/api/v1", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "The resource you requested for does not exist" });
  } else {
    res.send("The resource you requested does not exist");
  }
});

app.listen(PORT, ()=>{
    console.log("Server running");
});