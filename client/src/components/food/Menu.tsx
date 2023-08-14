import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import classNames from "classnames";
import Food from "./Food";
import { Pagination } from "@mui/material";
import axios from "axios";

const Menu: React.FC = () => {

  const [page, setPage] = useState(1);
  const [food, setFood] = useState<any>();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/food?page=${page}`,
      responseType: "json",
    }).then( ( response ) => {
      setFood(response.data);
      console.log(response)
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  }, [page]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated menu items
      </h1>

      <Food 
      foods={food?.data?.items || []}
      />

      <Pagination
        className="flex justify-center pt-10"
        count={food?.data?.pages || 1}
        color="primary"
        onChange={(event, curPage) => setPage(curPage)}
      />
    </div>
  );
};

export default Menu;
