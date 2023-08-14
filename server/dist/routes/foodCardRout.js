"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodCardController_1 = require("../controllers/foodCardController");
const router = express_1.default.Router();
router.get('/food', foodCardController_1.getFood);
exports.default = router;
//# sourceMappingURL=foodCardRout.js.map