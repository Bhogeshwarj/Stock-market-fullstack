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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = require("dotenv");
// Load environment variables
(0, dotenv_1.config)();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure that DB_URI is defined in the environment variables
        if (!process.env.DB_URI) {
            throw new Error('DB_URI is not defined in the environment variables');
        }
        // Create a connection pool using DB_URI from environment variables
        const pool = promise_1.default.createPool(process.env.DB_URI);
        console.log('Connected to the MySQL database!');
        return pool;
    }
    catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
    }
});
exports.connectDB = connectDB;
