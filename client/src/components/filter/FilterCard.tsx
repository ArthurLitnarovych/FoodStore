import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const FilterCard: React.FC<{item: string}> = ({ item }) => {
  const dispatch = useDispatch();
  const check = useSelector((state: any) => state.menu.check);

  return (
    <div className='border rounded-full px-4 shadow-md' key={item}>{item}</div>
  )
}

export default FilterCard