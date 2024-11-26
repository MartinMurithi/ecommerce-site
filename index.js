require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

const prodRouter = require("./routes/productRoute");
const cartRouter = require("./routes/CartRoute");
const userRouter = require("./routes/UsersRoute");
const connectDB = require("./config/DB");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use("/athena/api/v1", prodRouter);
app.use("/athena/api/v1", cartRouter);
app.use("/athena/api/v1", userRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/athena/api/v1/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Home.html"));
});

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


// Listen to open event on the mongoose connection
mongoose.connection.once("open", () => {
    app.listen(PORT, () => {
    console.log("This server is listening on port", PORT);
});
});

