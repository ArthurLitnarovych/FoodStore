import React from 'react'
import FoodCard from './FoodCard'

const Food: React.FC<Props> = ({ foods }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => <FoodCard item={item} />).slice(0, 16)}
    </div>
  )
}

export default Food