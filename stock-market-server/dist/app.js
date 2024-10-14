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
exports.myCache = void 0;
const express_1 = __importDefault(require("express"));
const node_cache_1 = __importDefault(require("node-cache"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const connectDB_1 = require("./utils/connectDB");
//importing routes
const watchlist_1 = __importDefault(require("./routes/watchlist"));
// Load environment variables
const port = process.env.PORT || 3008;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)();
        console.log('Database connection established!');
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit the application if the DB connection fails
    }
}))();
// Initialize cache
exports.myCache = new node_cache_1.default();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json()); // Parse JSON request bodies
app.use((0, morgan_1.default)("dev")); // HTTP request logging
app.use((0, cors_1.default)()); // Enable CORS
// Basic route
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1><p>This is a paragraph</p>`);
});
// Serve static files (e.g., images)
// app.use("/uploads", express.static("uploads"));
// Start the server
// app.use("/api/v1/user",userRoute);
app.use("/api/v1/watchlist", watchlist_1.default);
// app.use("/api/v1/individualStock",stockRoute );
app.use((req, res, next) => {
    const error = new errorHandler_1.default("Not Found", 404);
    next(error);
});
// app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});
