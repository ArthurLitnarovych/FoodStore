import { useState, useEffect, useCallback } from "react";
import Food from "./Food";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../../redux/slices/foodSlice";
// import api from '../../redux/api';

const Menu: React.FC = () => {
  const [page, setPage] = useState(1);
  const { currentPage, pages } = useSelector(
    (state: { menu: MenuState }) => state.menu
  );
  const dispatch = useDispatch();
  const loadFood = useCallback(async () => {
    dispatch<any>(getFood({ currentPage: page }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    loadFood();
  }, [loadFood]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated menu items
      </h1>

      <Food />

      <Pagination
        className="flex justify-center pt-10"
        count={pages || 1}
        color="primary"
        onChange={(event, curPage) => setPage(curPage)}
      />
    </div>
  );
};

export default Menu;
