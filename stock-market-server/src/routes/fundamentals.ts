import express from 'express';
import { addToFundamentals, fetchFundamentals } from '../controller/fundamentals';
// import { addToWatchlist, deleteStockFromWatchlist, fetchWatchlist } from '../controller/watchList';


const router = express.Router();

// route - /api/v1/order/add
router.post('/add', addToFundamentals);
router.get('/view', fetchFundamentals);


export default router;