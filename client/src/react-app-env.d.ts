/// <reference types="react-scripts" />
import { data } from "./components/food/foodData";

type foodCards = {
  message: string;
  data: {
    items: [
      { _id: string },
      { name: string },
      { category: string },
      { image: string },
      { price: string },
      { createdA: Date },
      { __v: number }
    ];
    numOfGoods: number;
    currentPage: number;
    pages: number;
  };
};
