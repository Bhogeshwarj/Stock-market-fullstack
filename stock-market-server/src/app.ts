import express from 'express';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { errorMiddleware } from './middleware/error';
import ErrorHandler from './utils/errorHandler';
import { connectDB } from './utils/connectDB';
//importing routes

import watchlistRoute from './routes/watchlist'


// Load environment variables


const port = process.env.PORT || 3008;


(async () => {
  try {
    await connectDB();
    console.log('Database connection established!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the application if the DB connection fails
  }
})();

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
// app.use("/uploads", express.static("uploads"));

// Start the server
// app.use("/api/v1/user",userRoute);
app.use("/api/v1/watchlist", watchlistRoute);
// app.use("/api/v1/individualStock",stockRoute );
app.use((req, res, next) => {  
  const error = new ErrorHandler("Not Found", 404);
  next(error);
});
// app.use(errorMiddleware);


app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
