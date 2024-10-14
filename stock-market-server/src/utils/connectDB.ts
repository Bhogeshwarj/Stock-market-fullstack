import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables
config();

let pool: mysql.Pool | undefined;

export const connectDB = async () => {
  try {
    // Ensure that DB_URI is defined in the environment variables
    if (!process.env.DB_URI) {
      throw new Error('DB_URI is not defined in the environment variables');
    }

    // Create a connection pool using DB_URI from environment variables
    pool = mysql.createPool(process.env.DB_URI);

    // Test the connection
    await pool.getConnection();
    console.log('Connected to the MySQL database!');

    // Create watchlist table if it does not exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS watchlist (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          symbol VARCHAR(100) NOT NULL UNIQUE,
          analysed BOOLEAN DEFAULT FALSE,
          remark TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);


  } catch (error) {
    console.error('Database connection failed:', (error as Error).message);
    throw error;
  }
};

// Export the pool for use in other modules
export const getPool = () => {
  if (!pool) {
    throw new Error('Database pool has not been initialized. Please call connectDB() first.');
  }
  return pool;
};
