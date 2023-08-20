import * as foodService from "../services/foodCard";
import { Request, Response } from "express";

export const getFood = async (req: Request, res: Response) => {
  try {
    let page = Number(req.query.page);

    if (page < 1) {
      page = 1;
    }

    const data = await foodService.getData(page);

    res.status(200).json({ message: "Все завантажено", data });
  } catch (error: any) {
    res.status(400).json({
      message: "Їжа не завантажилась через певну помилку",
      err: error?.message,
    });
  }
};

export const getFilteredFood = async (req: Request, res: Response) => {
  try {
    let page = Number(req.body.page);

    if (page < 1) {
      page = 1;
    }

    const data = await foodService.getFilteredData(page, req.body.check);

    res.status(200).json({ message: "Все завантажено", data });
  } catch (error: any) {
    res.status(400).json({
      message: "Їжа не завантажилась через певну помилку",
      err: error?.message,
    });
  }
};
