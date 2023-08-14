import React from 'react';
import FoodCard from './FoodCard';

const Food: React.FC<FoodProps> = ({ foods }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item: any, index: number) => <FoodCard food={item} key={index} />).slice(0, 16)}
    </div>
  )
}

export default Food