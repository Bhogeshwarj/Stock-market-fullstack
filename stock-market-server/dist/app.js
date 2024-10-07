"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCache = void 0;
const express_1 = __importDefault(require("express"));
const node_cache_1 = __importDefault(require("node-cache"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Load environment variables
(0, dotenv_1.config)({
    path: "./.env"
});
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
app.use("/uploads", express_1.default.static("uploads"));
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});
