"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodCardController_1 = require("../controllers/foodCardController");
const body_parser_1 = __importDefault(require("body-parser"));
const router = express_1.default.Router();
router.get('/food', foodCardController_1.getFood);
router.post('/filter-food', body_parser_1.default.json(), foodCardController_1.getFilteredFood);
exports.default = router;
//# sourceMappingURL=foodCardRout.js.map