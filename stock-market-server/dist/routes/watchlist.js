"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const watchList_1 = require("../controller/watchList");
const router = express_1.default.Router();
// route - /api/v1/order/add
router.post('/add', watchList_1.addToWatchlist);
router.get('/mywatchlist', watchList_1.fetchWatchlist);
exports.default = router;
