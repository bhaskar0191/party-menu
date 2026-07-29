import React from "react";

const Search = ({ meals, handleOrder, handleIngredients }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mt-6 mb-8 text-gray-800">
        🔍 Search Results
      </h2>

      {/* Results Grid */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border rounded-xl shadow-lg bg-white p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Meal Name */}
              <h3 className="font-bold text-lg text-green-700 mb-2">
                {meal.strMeal}
              </h3>

              {/* Meal Image */}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105"
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105"
                  onClick={() => handleOrder(meal)}
                >
                  🍽 Order
                </button>
                <button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 rounded-lg shadow hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
                  onClick={() => handleIngredients(meal)}
                >
                  🥗 Ingredients
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-lg font-medium">
            No meals found. Try searching again!
          </p>
        )}
      </ul>
    </div>
  );
};

export default Search;
