
import { addStockToWatchlist, getWatchlist , deleteStockById } from "../models/watchlistModel";
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



// export const deleteStockFromWatchlist = async (req: Request, res: Response) => {
//     const idParam = req.params.id;

//     if (!idParam || isNaN(Number(idParam))) {
//       return res.status(400).json({ message: 'Invalid stock ID' });
//     }

//     const id = parseInt(idParam, 10); 

//     try {
//       const result = await deleteStockById(id);

//     //   if (result.affectedRows === 0) {
//     //     return res.status(404).json({ message: 'Stock not found' });
//     //   }

//       res.status(200).json({ message: 'Stock deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error deleting stock', error });
//     }
//   };

export const deleteStockFromWatchlist = async (req: Request, res: Response): Promise<void> => {
    const idParam = req.params.id;

    // Check if the ID is valid
    // if (!idParam || isNaN(Number(idParam))) {
    //     return res.status(400).json({ message: 'Invalid stock ID' });
    // }

    const id = parseInt(idParam, 10);

    try {
        const result = await deleteStockById(id);  // Assuming deleteStockById interacts with the database

        // if (result.affectedRows === 0) {
        //     return res.status(404).json({ message: 'Stock not found' });
        // }

        // Successful deletion
        res.status(200).json({ message: 'Stock deleted successfully' });
    } catch (error) {
        // Error handling
        res.status(500).json({ message: 'Error deleting stock', error });
    }
};