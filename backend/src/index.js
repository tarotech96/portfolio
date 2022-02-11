"use strict";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import { data } from "./blogs-data.js";
const PORT = process.env.PORT || 8080;

const app = express();

dotEnv.config();

app.use(bodyParser.json()).use(cors());

app.get("/blogs", (req, res) => {
  res.status(200);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
