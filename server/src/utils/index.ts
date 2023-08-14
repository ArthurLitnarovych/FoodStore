import mongoose, { ConnectOptions } from "mongoose";
import fs from "fs";
import foodCard from "../models/foodCard";
import config from "../config/config";
import path from "path";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  mongoose
    .connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .catch((err) => {
      console.log(err.stack);
      process.exit(1);
    })
    .then(() => {
      console.log("Підключено до бази даних");
    });
};

connectDB();

const food = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "foodCards.json"), "utf8")
);

const loadFood = async () => {
  try {
    await foodCard.create(food);
    console.log("Файли завантажені");
    mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
};

const deleteFood = async () => {
  try {
    await foodCard.deleteMany();
    console.log("Файли видалені");
    mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
};

if (process.argv[2] === "-lfood") {
  loadFood().then();
} else if (process.argv[2] === "-dfood") {
  deleteFood().then();
}
