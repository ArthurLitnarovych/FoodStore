import React from "react";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

const Food: React.FC = () => {
  const { items } = useSelector((state: { menu: MenuState }) => state.menu);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {items ? (
        items
          .map((item: any, index: number) => (
            <FoodCard food={item} key={index} />
          ))
          .slice(0, 16)
      ) : (
        <> nothing </>
      )}
    </div>
  );
};

export default Food;
