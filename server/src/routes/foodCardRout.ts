import express from 'express';
import { getFood } from '../controllers/foodCardController';

const router = express.Router();

router.get('/food', getFood);
export default router;
