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
exports.getWatchlist = exports.addStockToWatchlist = void 0;
const connectDB_1 = require("../utils/connectDB");
const addStockToWatchlist = (stockName, symbol, analysed, remark) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = (0, connectDB_1.getPool)(); // Get the pool instance
        const query = `INSERT INTO watchlist (name, symbol, analysed, remark) VALUES (?, ?, ?, ?)`;
        // Use null if remark is undefined
        const values = [stockName, symbol, analysed, remark];
        console.log(values);
        yield pool.execute(query, values); // Use the pool instance here
        return { message: 'Stock added to watchlist successfully' };
    }
    catch (error) {
        console.error('Error adding stock to watchlist:', error);
        throw new Error('Failed to add stock to watchlist');
    }
});
exports.addStockToWatchlist = addStockToWatchlist;
const getWatchlist = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = (0, connectDB_1.getPool)();
        const query = `SELECT * FROM watchlist`;
        const [rows] = yield pool.query(query); // Use pool to query the database
        return rows;
    }
    catch (error) {
        console.error('Error fetching watchlist:', error);
        throw new Error('Failed to fetch watchlist');
    }
});
exports.getWatchlist = getWatchlist;
