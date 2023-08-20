import React from "react";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import classNames from "classnames";

const Food: React.FC = () => {
  const { items, isLoading } = useSelector((state: { menu: MenuState }) => state.menu);

  return (
    <div className={classNames(isLoading ? 'flex justify-center h-[1100px]' : "grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 pb-6")}>
      {isLoading ? (
        <div className="m-auto">
          <Loader />
        </div>
        
      ) : (
        items
          .map((item: any, index: number) => <FoodCard food={item} key={index} />)
          .slice(0, 16)
      )}
    </div>
  );
};

export default Food;
