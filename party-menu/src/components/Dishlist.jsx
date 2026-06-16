import React from 'react'
import { dishes } from '../assets/dish.js'

const Dishlist = () => {
  return (
    <div className="p-4">
      <h2>Menu</h2>
      <ul>
        {dishes.map((dish) => (
          <li 
            key={dish.id}
            className="border p-4 mb-4 rounded-lg shadow-sm"> 
            <div className="flex flex-col justify-center gap-2  ">
              <small 
                  className="text-gray-500 block mb-1"
              >
                {dish.mealType} | {dish.category?.name} | {dish.type} 
              </small>
              <h3 className="text-xl font-bold">{dish.name}</h3>
               <div className="flex items-center gap-4 mt-2border p-4 mb-4 rounded-lg shadow-sm">
               {/* Render category image */}
              {dish.category?.image && (
                <img
                  src={dish.category.image}
                  alt={dish.category.name}
                  className="w-50 h-50 object-cover rounded-full mt-2"
                />
              )}
              </div>
              <small className="text-gray-500">
                {dish.dishType}
             </small>
            <p>{dish.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dishlist