import { addStockToFundamentals, getFundamentals } from "../models/fundamentalAnalysisModel"; // Ensure you have this function in your model
import { Request, Response, NextFunction } from 'express';

export const addToFundamentals = async (req: Request, res: Response, next: NextFunction) => {
  // Destructure the properties from the request body
  const { stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity } = req.body;
  console.log("Received stock data:", req.body);
  try {
    // Call the function to add the stock to the fundamentals table
    const result = await addStockToFundamentals(stockName, peRatio, marketCap, grossProfitMargin, returnOnEquity);

    // Send a success response
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error('Error in addToFundamentals:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding stock to fundamental analysis',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const fetchFundamentals = async (req: Request, res: Response) => {
    try {
      const watchlist = await getFundamentals();
      res.status(200).json(watchlist);
    } catch (error) {
      res.status(500).json({ message: "Error fetching watchlist", error });
    }
  };
  
