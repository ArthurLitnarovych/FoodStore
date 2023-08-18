"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
dotenv_1.default.config();
// routes import
const foodCardRout_1 = __importDefault(require("./routes/foodCardRout"));
// routes
app.use("/api", foodCardRout_1.default);
async function start() {
    const connectDB = async () => {
        mongoose_1.default
            .connect(config_1.default.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .catch((err) => {
            console.log(err.meassage);
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