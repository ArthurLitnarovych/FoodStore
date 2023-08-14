import foodCard from "../models/foodCard";
import fConfig from "./foodCardConfig";

export const getData = async (page: number) => {
  const skip = (page - 1) * +fConfig.itemsPerPage;
  const numOfGoods = await foodCard.countDocuments();
  const pages = numOfGoods/+fConfig.itemsPerPage;
  const items = await foodCard.find().skip(skip).limit(+fConfig.itemsPerPage);

  return {
    items,
    numOfGoods,
    currentPage: page,
    pages,
  };
};
