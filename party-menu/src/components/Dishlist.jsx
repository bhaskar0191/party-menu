import React from "react";
import { dishes } from "../assets/dish.js";

const Dishlist = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        🍴 Our Menu
      </h2>

      {/* Dish List */}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <li
            key={dish.id}
            className="border rounded-xl shadow-lg bg-white p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col gap-4">
              {/* Meal Type / Category */}
              <small className="text-gray-500">
                {dish.mealType} | {dish.category?.name} | {dish.type}
              </small>

              {/* Dish Name */}
              <h3 className="text-xl font-bold text-green-700">{dish.name}</h3>

              {/* Category Image */}
              {dish.category?.image && (
                <div className="flex items-center justify-center">
                  <img
                    src={dish.category.image}
                    alt={dish.category.name}
                    className="w-24 h-24 object-cover rounded-full border-2 border-green-300 shadow-md"
                  />
                </div>
              )}

              {/* Dish Type */}
              <small className="text-gray-500 italic">{dish.dishType}</small>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">{dish.description}</p>

              {/* Action Button */}
              <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-pink-600 hover:to-red-600 transition-transform transform hover:scale-105">
                🍽 Order Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishlist;