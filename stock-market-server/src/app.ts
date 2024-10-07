import express from 'express';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// Load environment variables
config({
  path: "./.env"
});

// Initialize cache
export const myCache = new NodeCache();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(morgan("dev"));  // HTTP request logging
app.use(cors());         // Enable CORS

// Basic route
app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1><p>This is a paragraph</p>`);
});

// Serve static files (e.g., images)
app.use("/uploads", express.static("uploads"));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
