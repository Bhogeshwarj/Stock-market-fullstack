import { getPool } from "../utils/connectDB";

export const addStockToWatchlist = async (stockName: string, symbol: string, analysed: boolean, remark?: string) => {
    try {
      const pool = getPool(); // Get the pool instance
      const query = `INSERT INTO watchlist (name, symbol, analysed, remark) VALUES (?, ?, ?, ?)`;
      
      // Use null if remark is undefined
      const values = [stockName, symbol, analysed, remark];
      console.log(values)
  
      await pool.execute(query, values); // Use the pool instance here
      return { message: 'Stock added to watchlist successfully' };
    } catch (error) {
      console.error('Error adding stock to watchlist:', error);
      throw new Error('Failed to add stock to watchlist');
    }
  };
  



  export const getWatchlist = async () => {
    try {
        const pool = getPool();
      const query = `SELECT * FROM watchlist`;
      const [rows] = await pool.query(query);  // Use pool to query the database
      return rows;
    } catch (error) {
      console.error('Error fetching watchlist:', error);
      throw new Error('Failed to fetch watchlist');
    }
  };

  export const deleteStockById = async (id: number) => {
    try {
      const pool = getPool(); // Assuming getPool() is used to get the database connection pool
      const query = `DELETE FROM watchlist WHERE id = ?`;
      
      const [result] = await pool.query(query, [id]);  // Use pool to run the DELETE query
      return result; // Result will include affectedRows, etc.
    } catch (error) {
      console.error('Error deleting stock:', error);
      throw new Error('Failed to delete stock');
    }
  };
  
