import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import classNames from "classnames";
import Food from "./Food";

const Menu: React.FC<Props> = ({ foods }) => {
  const [data, setData] = useState(foods);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activePrice, setActivePrice] = useState<string | null>(null);

  const filterType = (category: string) => {
    if (activePrice === null) {
      setData(foods.filter((item) => item.category === category));
    } else {
      setData(foods.filter((item) => item.price === activePrice));
      setData((prevData) =>
        prevData.filter((item) => item.category === category)
      );
    }
  };

  const filterPrice = (price: string) => {
    if (activeType === null) {
      setData(foods.filter((item) => item.price === price));
    } else {
      setData(foods.filter((item) => item.category === activeType));
      setData((prevData) => prevData.filter((item) => item.price === price));
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated menu items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex justify-between flex-wrap">
            <button
              disabled={activeType === null}
              className={classNames(
                "m-1 border",
                activeType === null
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                setData(foods);
                setActiveType(null);
                setActivePrice(null);
              }}
            >
              All
            </button>
            <button
              disabled={activeType === "burger"}
              className={classNames(
                "m-1 border",
                activeType === "burger"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterType("burger");
                setActiveType("burger");
              }}
            >
              Burgers
            </button>
            <button
              disabled={activeType === "pizza"}
              className={classNames(
                "m-1 border",
                activeType === "pizza"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterType("pizza");
                setActiveType("pizza");
              }}
            >
              Pizza
            </button>
            <button
              disabled={activeType === "salad"}
              className={classNames(
                "m-1 border",
                activeType === "salad"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterType("salad");
                setActiveType("salad");
              }}
            >
              Salads
            </button>
            <button
              disabled={activeType === "chicken"}
              className={classNames(
                "m-1 border",
                activeType === "chicken"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterType("chicken");
                setActiveType("chicken");
              }}
            >
              Chickens
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter price</p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            <button
              disabled={activePrice === "$"}
              className={classNames(
                "m-1 border",
                activePrice === "$"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterPrice("$");
                setActivePrice("$");
              }}
            >
              $
            </button>
            <button
              disabled={activePrice === "$$"}
              className={classNames(
                "m-1 border",
                activePrice === "$$"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterPrice("$$");
                setActivePrice("$$");
              }}
            >
              $$
            </button>
            <button
              disabled={activePrice === "$$$"}
              className={classNames(
                "m-1 border",
                activePrice === "$$$"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterPrice("$$$");
                setActivePrice("$$$");
              }}
            >
              $$$
            </button>
            <button
              disabled={activePrice === "$$$$"}
              className={classNames(
                "m-1 border",
                activePrice === "$$$$"
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              )}
              onClick={() => {
                filterPrice("$$$$");
                setActivePrice("$$$$");
              }}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      <Food 
      foods={data} 
      />
    </div>
  );
};

export default Menu;
