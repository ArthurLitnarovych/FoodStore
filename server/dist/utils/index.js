"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fs_1 = __importDefault(require("fs"));
const foodCard_1 = __importDefault(require("../models/foodCard"));
const config_1 = __importDefault(require("../config/config"));
const path_1 = __importDefault(require("path"));
mongoose_1.default.set("strictQuery", false);
const connectDB = async () => {
    mongoose_1.default
        .connect(config_1.default.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .catch((err) => {
        console.log(err.stack);
        process.exit(1);
    })
        .then(() => {
        console.log("Підключено до бази даних");
    });
};
connectDB();
const food = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "data", "foodCards.json"), "utf8"));
const loadFood = async () => {
    try {
        await foodCard_1.default.create(food);
        console.log("Файли завантажені");
        mongoose_1.default.disconnect();
    }
    catch (e) {
        console.log(e);
    }
};
const deleteFood = async () => {
    try {
        await foodCard_1.default.deleteMany();
        console.log("Файли видалені");
        mongoose_1.default.disconnect();
    }
    catch (e) {
        console.log(e);
    }
};
if (process.argv[2] === "-lfood") {
    loadFood().then();
}
else if (process.argv[2] === "-dfood") {
    deleteFood().then();
}
//# sourceMappingURL=index.js.map