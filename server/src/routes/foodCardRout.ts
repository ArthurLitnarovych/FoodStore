import express from 'express';
import { getFood, getFilteredFood } from '../controllers/foodCardController';
import bodyParser from 'body-parser';

const router = express.Router();

router.get('/food', getFood);
router.post('/filter-food', bodyParser.json(), getFilteredFood);

export default router;
