import { useState, useEffect, useCallback } from "react";
import Food from "./Food";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFood, setCurrentPage } from "../../redux/slices/foodSlice";
import Filters from "../filter/Filters";

const Menu: React.FC = () => {
  const { pages, check, currentPage } = useSelector(
    (state: { menu: MenuState }) => state.menu
  );
  const dispatch = useDispatch();
  const handleCurrentPage = (value: number) => {
    dispatch(setCurrentPage(value));
  };
  const loadFood = useCallback(async () => {
    if (check.length < 1) {
      await dispatch<any>(getFood({ currentPage }));
    }
  }, [dispatch, currentPage, check]);

  useEffect(() => {
    loadFood();
  }, [currentPage]);

  return (
    <div className="max-w-[1640px] m-auto px-4 pt-12 pb-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated menu items
      </h1>

      <Filters />

      <Food />

      <Pagination
        className="flex justify-center"
        count={pages || 1}
        color="primary"
        onChange={async (event, curPage) => handleCurrentPage(curPage)}
      />
    </div>
  );
};

export default Menu;
