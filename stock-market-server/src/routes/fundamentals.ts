import express from 'express';
import { addToFundamentals } from '../controller/fundamentals';
// import { addToWatchlist, deleteStockFromWatchlist, fetchWatchlist } from '../controller/watchList';


const router = express.Router();

// route - /api/v1/order/add
router.post('/add', addToFundamentals);


export default router;