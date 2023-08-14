/// <reference types="react-scripts" />

type foodCard = {
  name: string,
  image: string, 
  price: string
};

type FoodProps = {
  foods: foodCard[]
};
