"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, 'src', 'config', '.env') });
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    res.json({ "users": ["1", "2", "3", "4", "5", "6"] });
});
app.listen(5000, () => console.log(`Server started on port ${process.env.PORT}`));
//# sourceMappingURL=index.js.map