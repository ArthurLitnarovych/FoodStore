"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
        maxlength: [30, "Більше 30 символів"],
        minLength: [2, "Менше 2 символів"],
    },
    category: {
        type: String,
        require: true,
        maxlength: [30, "Більше 30 символів"],
        minLength: [2, "Менше 2 символів"],
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
exports.default = mongoose_1.default.model("foodCard", schema);
//# sourceMappingURL=foodCard.js.map