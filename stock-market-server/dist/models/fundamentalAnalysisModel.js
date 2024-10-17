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
exports.getFundamentals = exports.addStockToFundamentals = void 0;
const connectDB_1 = require("../utils/connectDB");
const addStockToFundamentals = (stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = (0, connectDB_1.getPool)(); // Get the pool instance
        const query = `INSERT INTO fundamental_analysis (stock_name, pe_ratio, market_cap, gross_profit_margin, return_on_equity) VALUES (?, ?, ?, ?, ?)`;
        const values = [stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity];
        yield pool.execute(query, values); // Use the pool instance here
        return { message: 'Fundamental data added successfully' };
    }
    catch (error) {
        console.error('Error adding stock to fundamentals:', error);
        throw new Error('Failed to add stock to fundamental analysis');
    }
});
exports.addStockToFundamentals = addStockToFundamentals;
const getFundamentals = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = (0, connectDB_1.getPool)(); // Get the pool instance
        const query = `SELECT * FROM fundamental_analysis`;
        const [rows] = yield pool.query(query); // Use pool to query the database
        return rows;
    }
    catch (error) {
        console.error('Error fetching fundamentals:', error);
        throw new Error('Failed to fetch fundamental analysis data');
    }
});
exports.getFundamentals = getFundamentals;
