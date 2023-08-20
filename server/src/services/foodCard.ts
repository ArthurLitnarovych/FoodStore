import foodCard from "../models/foodCard";
import fConfig from "./foodCardConfig";

export const getData = async (page: number) => {
  const numOfGoods = await foodCard.countDocuments();
  const pages = Math.ceil(numOfGoods / +fConfig.itemsPerPage);
  let newPage = page;
  if (page > pages) {
    newPage = pages;
  }
  const allitems = await foodCard.find().exec();
  const skip = (newPage - 1) * +fConfig.itemsPerPage;

  const items = await foodCard.find().skip(skip).limit(+fConfig.itemsPerPage);
  const maxPrice = Math.max(...allitems.map((item) => Number(item.price)));

  return {
    items,
    numOfGoods,
    currentPage: page,
    pages,
    maxPrice,
  };
};

export const getFilteredData = async (page: number, check: string[]) => {
  const numOfGoods = await foodCard
    .find({ category: { $in: check } })
    .countDocuments();
  const pages = Math.ceil(numOfGoods / +fConfig.itemsPerPage);
  let newPage = page;
  if (page > pages) {
    newPage = pages;
  }
  const skip = (newPage - 1) * +fConfig.itemsPerPage;
  const allitems = await foodCard.find({ category: { $in: check } }).exec();
  const items = await foodCard
    .find({ category: { $in: check } })
    .skip(skip)
    .limit(+fConfig.itemsPerPage);

  const maxPrice = Math.max(...allitems.map((item) => Number(item.price)));

  return {
    items,
    numOfGoods,
    currentPage: page,
    pages,
    maxPrice,
  };
};
