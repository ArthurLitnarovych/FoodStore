import foodCard from "../models/foodCard";
import { Request, Response } from 'express';
import fConfig from "./foodCardConfig";

export const getData = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * +fConfig.itemsPerPage;
    const numOfGoods = await foodCard.countDocuments();
    const items = await foodCard.find().skip(skip).limit(+fConfig.itemsPerPage);

    return res.json({
      items,
      numOfGoods,
      currentPage: page
    });
};