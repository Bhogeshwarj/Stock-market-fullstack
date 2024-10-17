import { getPool } from "../utils/connectDB";

export const addStockToFundamentals = async (
  stockName: string,
  peRatio: number,
  marketCap: number,
  grossProfitMargin: number,
  returnOnEquity: number
) => {
  try {
    const pool = getPool(); // Get the pool instance
    const query = `INSERT INTO fundamental_analysis (stock_name, pe_ratio, market_cap, gross_profit_margin, return_on_equity) VALUES (?, ?, ?, ?, ?)`;

    const values = [stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity];

    await pool.execute(query, values); // Use the pool instance here
    return { message: 'Fundamental data added successfully' };
  } catch (error) {
    console.error('Error adding stock to fundamentals:', error);
    throw new Error('Failed to add stock to fundamental analysis');
  }
};



export const getFundamentals = async () => {
  try {
    const pool = getPool(); // Get the pool instance
    const query = `SELECT * FROM fundamental_analysis`;
    const [rows] = await pool.query(query); // Use pool to query the database
    return rows;
  } catch (error) {
    console.error('Error fetching fundamentals:', error);
    throw new Error('Failed to fetch fundamental analysis data');
  }
};
