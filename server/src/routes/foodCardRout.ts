import express from 'express';
import { getFood } from '../controllers/foodCardController';

const router = express.Router();

router.get('/data');
export default router;
