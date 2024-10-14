// import { Request, Response, NextFunction } from 'express';
// import { db } from '../utils/db';

// // Example: Add stock to the watchlist
// export const addStockToWatchlist = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { stockName } = req.body;
//     const query = `INSERT INTO watchlist (stock_name) VALUES (?)`;

//     const [result] = await db.execute(query, [stockName]);

//     res.status(201).json({
//       success: true,
//       message: 'Stock added to the watchlist',
//       data: result
//     });
//   } catch (error) {
//     next(error);
//   }
// };
