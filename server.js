import express from "express";
const port = process.env.PORT || 8080;
import mongoose from "mongoose";
import apiRouter from "./src/routes/api.js";
import { notFoundResponse } from "./src/helpers/response.js"

const MONGO_URI = process.env.ATLAS_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then()
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;

var app = express();
app.use(express.json());
app.use("/", apiRouter);

app.all("*", function (req, res) {
		return notFoundResponse(res, "Page Not Found");
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
