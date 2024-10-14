import express from 'express';
import { addToWatchlist, fetchWatchlist } from '../controller/watchList';

const router = express.Router();

// route - /api/v1/order/add
router.post('/add', addToWatchlist);

router.get('/mywatchlist',fetchWatchlist);

export default router;
