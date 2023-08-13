/// <reference types="react-scripts" />

interface FoodItem {
    id: number;
    name: string;
    category: string;
    image: string;
    price: string;
  }
  
interface Props {
    foods: FoodItem[];
}

interface FoodProp {
    item: FoodItem;
}
