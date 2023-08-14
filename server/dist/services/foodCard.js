"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const foodCard_1 = __importDefault(require("../models/foodCard"));
const foodCardConfig_1 = __importDefault(require("./foodCardConfig"));
const getData = async (page) => {
    const skip = (page - 1) * +foodCardConfig_1.default.itemsPerPage;
    const numOfGoods = await foodCard_1.default.countDocuments();
    const pages = numOfGoods / +foodCardConfig_1.default.itemsPerPage;
    const items = await foodCard_1.default.find().skip(skip).limit(+foodCardConfig_1.default.itemsPerPage);
    return {
        items,
        numOfGoods,
        currentPage: page,
        pages,
    };
};
exports.getData = getData;
//# sourceMappingURL=foodCard.js.map