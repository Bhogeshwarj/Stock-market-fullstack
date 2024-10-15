import express from 'express';
import { addToWatchlist, deleteStockFromWatchlist, fetchWatchlist } from '../controller/watchList';
// import { addToWatchlist,  fetchWatchlist } from '../controller/watchList';

const router = express.Router();

// route - /api/v1/order/add
router.post('/add', addToWatchlist);

router.get('/mywatchlist',fetchWatchlist);

router.delete('/delete/:id', deleteStockFromWatchlist);

export default router;
