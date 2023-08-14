"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// routes import
const foodCardRout_1 = __importDefault(require("./routes/foodCardRout"));
// routes
app.use("/api", foodCardRout_1.default);
async function start() {
    const connectDB = async () => {
        mongoose_1.default
            .connect(process.env.MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .catch((err) => {
            console.log(err.message);
            process.exit(1);
        })
            .then(() => {
            console.log("Підключено до бази даних");
        });
    };
    app.listen(config_1.default.port, () => console.log(`Server started on port ${config_1.default.port}`));
    connectDB();
}
start();
//# sourceMappingURL=index.js.map