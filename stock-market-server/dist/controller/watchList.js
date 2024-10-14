"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWatchlist = exports.addToWatchlist = void 0;
const watchlistModel_1 = require("../models/watchlistModel");
const addToWatchlist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { stockName, symbol, analysed, remark } = req.body;
    try {
        const result = yield (0, watchlistModel_1.addStockToWatchlist)(stockName, symbol, analysed, remark);
        res.status(200).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        console.error('Error in addToWatchlistHandler:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding stock to watchlist',
            error: error instanceof Error ? error.message : error,
        });
    }
});
exports.addToWatchlist = addToWatchlist;
const fetchWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const watchlist = yield (0, watchlistModel_1.getWatchlist)();
        res.status(200).json(watchlist);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching watchlist", error });
    }
});
exports.fetchWatchlist = fetchWatchlist;
