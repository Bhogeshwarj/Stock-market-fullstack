import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables
config();

export const connectDB = async () => {
  try {
    // Ensure that DB_URI is defined in the environment variables
    if (!process.env.DB_URI) {
      throw new Error('DB_URI is not defined in the environment variables');
    }

    // Create a connection pool using DB_URI from environment variables
    const pool = mysql.createPool(process.env.DB_URI);

    console.log('Connected to the MySQL database!');
    return pool;

  } catch (error) {
    console.error('Database connection failed:', (error as Error).message);
    throw error;
  }
};
