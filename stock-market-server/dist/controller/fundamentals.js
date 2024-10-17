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
exports.fetchFundamentals = exports.addToFundamentals = void 0;
const fundamentalAnalysisModel_1 = require("../models/fundamentalAnalysisModel"); // Ensure you have this function in your model
const addToFundamentals = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the properties from the request body
    const { stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity } = req.body;
    console.log("Received stock data:", req.body);
    try {
        // Call the function to add the stock to the fundamentals table
        const result = yield (0, fundamentalAnalysisModel_1.addStockToFundamentals)(stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity);
        // Send a success response
        res.status(200).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        console.error('Error in addToFundamentals:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding stock to fundamental analysis',
            error: error instanceof Error ? error.message : error,
        });
    }
});
exports.addToFundamentals = addToFundamentals;
const fetchFundamentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const watchlist = yield (0, fundamentalAnalysisModel_1.getFundamentals)();
        res.status(200).json(watchlist);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching watchlist", error });
    }
});
exports.fetchFundamentals = fetchFundamentals;
