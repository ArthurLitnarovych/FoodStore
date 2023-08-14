import * as getData from "../services/foodCard";
import { Request, Response } from 'express';

export const getFood = async (req: Request, res: Response) => {
  try {
    const data = await getData.getData(req, res);

    res.status(200).json({ message: "Все завантажено", data });
  } catch (error: any) {
    res
      .status(400)
      .json({
        message: "Їжа не завантажилась через певну помилку",
        err: error?.message,
      });
  }
};
