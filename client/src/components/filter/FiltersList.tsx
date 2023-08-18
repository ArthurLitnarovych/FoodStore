import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCard from "./FilterCard";

const FiltersList = () => {
  const dispatch = useDispatch();
  const check = useSelector((state: any) => state.menu.check);

  return (
    <div className="flex flex-row gap-4 text-xl">
      {check.map((item: string) => (
        <FilterCard key={item} item={item} />
      ))}
    </div>
  );
};

export default FiltersList;
