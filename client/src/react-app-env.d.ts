/// <reference types="react-scripts" />

type foodCard = {
  name: string,
  image: string, 
  price: string
};

interface MenuItem {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  createdAt: string;
  __v: number;
};

type MenuState = {
  items: MenuItem[];
  numOfGoods: number;
  currentPage: number;
  pages: number;
};
