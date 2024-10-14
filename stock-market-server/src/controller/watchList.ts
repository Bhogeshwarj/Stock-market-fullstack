
import { addStockToWatchlist, getWatchlist } from "../models/watchlistModel";
import { Request, Response, NextFunction } from 'express';

export const addToWatchlist = async (req: Request, res: Response, next: NextFunction) => {
  const { stockName, symbol, analysed, remark } = req.body;
  
  try {
    const result = await addStockToWatchlist(stockName, symbol, analysed, remark);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error('Error in addToWatchlistHandler:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding stock to watchlist',
      error: error instanceof Error ? error.message : error,
    });
  }
};
export const fetchWatchlist = async (req: Request, res: Response) => {
  try {
    const watchlist = await getWatchlist();
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching watchlist", error });
  }
};
