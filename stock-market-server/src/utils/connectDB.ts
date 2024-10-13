import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

export const connectDB = async () => {
  try {
    const pool = mysql.createPool("mysql://avnadmin:AVNS_mCNlo0-ADTQ1QpdfEeZ@mysql-35439d19-bhogeshwarj-4ebf.l.aivencloud.com:22888/defaultdb");

    // Test connection
    await pool.getConnection();
    console.log(`Connected to the MySQL database .`);

    return pool; // Return the pool to use elsewhere in the app
  } catch (error) {
    if (error instanceof Error) {
      console.error('Database connection failed:', error.message);
    } else {
      console.error('Unknown error occurred during database connection');
    }
    throw error; // Rethrow the error for handling at a higher level
  }
};
