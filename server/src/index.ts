import * as fs from "fs";
import express from "express";
import config from "./config/config";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();

// routes import

import foodRout from "./routes/foodCardRout";

// routes

app.use("/api/food", foodRout);

async function start() {
  const connectDB = async () => {
    mongoose
      .connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .catch((err) => {
        console.log(err.message);
        process.exit(1);
      })
      .then(() => {
        console.log("Підключено до бази даних");
      });
  };
  app.listen(config.port, () =>
    console.log(`Server started on port ${config.port}`)
  );

  connectDB();
  
}

start();
