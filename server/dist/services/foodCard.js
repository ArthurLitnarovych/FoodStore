"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredData = exports.getData = void 0;
const foodCard_1 = __importDefault(require("../models/foodCard"));
const foodCardConfig_1 = __importDefault(require("./foodCardConfig"));
const getData = async (page) => {
    const numOfGoods = await foodCard_1.default.countDocuments();
    const pages = Math.ceil(numOfGoods / +foodCardConfig_1.default.itemsPerPage);
    let newPage = page;
    if (page > pages) {
        newPage = pages;
    }
    const allitems = await foodCard_1.default.find().exec();
    const skip = (newPage - 1) * +foodCardConfig_1.default.itemsPerPage;
    const items = await foodCard_1.default.find().skip(skip).limit(+foodCardConfig_1.default.itemsPerPage);
    const maxPrice = Math.max(...allitems.map((item) => Number(item.price)));
    return {
        items,
        numOfGoods,
        currentPage: page,
        pages,
        maxPrice,
    };
};
exports.getData = getData;
const getFilteredData = async (page, check) => {
    const numOfGoods = await foodCard_1.default
        .find({ category: { $in: check } })
        .countDocuments();
    const pages = Math.ceil(numOfGoods / +foodCardConfig_1.default.itemsPerPage);
    let newPage = page;
    if (page > pages) {
        newPage = pages;
    }
    const skip = (newPage - 1) * +foodCardConfig_1.default.itemsPerPage;
    const allitems = await foodCard_1.default.find({ category: { $in: check } }).exec();
    const items = await foodCard_1.default
        .find({ category: { $in: check } })
        .skip(skip)
        .limit(+foodCardConfig_1.default.itemsPerPage);
    const maxPrice = Math.max(...allitems.map((item) => Number(item.price)));
    console.log(newPage);
    return {
        items,
        numOfGoods,
        currentPage: page,
        pages,
        maxPrice,
    };
};
exports.getFilteredData = getFilteredData;
//# sourceMappingURL=foodCard.js.map