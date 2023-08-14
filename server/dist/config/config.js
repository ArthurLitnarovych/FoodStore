"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '.env') });
const config = {
    port: process.env.PORT || 5000,
    mongodbURL: `mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@cluster0.c81nfsj.mongodb.net/`
};
exports.default = config;
//# sourceMappingURL=config.js.map