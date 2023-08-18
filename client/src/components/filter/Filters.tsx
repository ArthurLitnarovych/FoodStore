import { Button, Slider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import {
  setCheck,
  setSlider,
  setInputChange,
  sendCheck,
  getFood,
  setCurrentPage,
} from "../../redux/slices/foodSlice";
import FiltersList from "./FiltersList";

const Filters = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(1);
  const [change2, setChange2] = useState(4);
  const { maxPrice, check, slider, currentPage } = useSelector((state: { menu: MenuState }) => state.menu);

  const sendFilters = async () => {
    if (check.length > 0) {
      return await dispatch<any>(sendCheck({check: check.map((item: string) => item.toLowerCase()), currentPage}));
    } else {
      await dispatch<any>(getFood({ currentPage }));
    }
  };

  const handleCheckToggle = async (id: string) => {
    await dispatch(setCheck(id));
  };

  const handleSliderChange = useCallback(
    (event: Event, value: number | number[], activeThumb: number) => {
      dispatch(setSlider(Array.isArray(value) ? value : [value]));
    },
    [dispatch]
  );

  const handleInputChange = (index: number, value: number) => {
    dispatch(setInputChange({ index, value }));
  };

  useEffect(() => {
    
    sendFilters();
  }, [check, currentPage]);


  return (
    <div className="pt-10">
      <FiltersList />
      <div className="flex flex-row w-full shadow-lg p-5 rounded-lg mt-4">
        <div className="border-black border-r border-opacity-20 border-dashed  pr-4">
          <p className="font-bold text-2xl">Categories</p>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <Checkbox
                color="success"
                checked={check.includes("Chicken")}
                onChange={() => handleCheckToggle("Chicken")}
              />
              <p className="p-3">Chicken</p>
            </div>
            <div className="flex flex-row">
              <Checkbox
                color="success"
                checked={check.includes("Pizza")}
                onChange={() => handleCheckToggle("Pizza")}
              />
              <p className="p-3">Pizza</p>
            </div>
            <div className="flex flex-row">
              <Checkbox
                color="success"
                checked={check.includes("Burger")}
                onChange={() => handleCheckToggle("Burger")}
              />
              <p className="p-3">Burger</p>
            </div>
            <div className="flex flex-row">
              <Checkbox
                color="success"
                checked={check.includes("Salad")}
                onChange={() => handleCheckToggle("Salad")}
              />
              <p className="p-3">Salad</p>
            </div>
          </div>
        </div>
        <div className="border-black border-r border-opacity-20 border-dashed  pr-4 pl-4">
          <p className="font-bold text-2xl">Price</p>
          <div className="flex flex-col justify-center">
            <Slider
              getAriaLabel={() => "Price"}
              max={maxPrice}
              value={slider}
              onChangeCommitted={() => {
                setChange(change + 1);
                setChange2(change2 + 1);
              }}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
            />
            <p className="flex flex-col pt-4 pb-4 gap-4">
              <input
                key={change}
                type="text"
                className="rounded-md shadow-md bg-gray-50 min-w-fit "
                defaultValue={slider[0]}
                onChange={(e) => handleInputChange(0, parseInt(e.target.value))}
              />
              <input
                key={change2}
                type="text"
                className="rounded-md shadow-md bg-gray-50"
                defaultValue={slider[1]}
                onChange={(e) => handleInputChange(1, parseInt(e.target.value))}
              />
            </p>
            <Button className="h-10" variant="contained" endIcon={<SendIcon />}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
