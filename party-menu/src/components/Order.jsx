import React from 'react';

const Order = ({ meal, onBack, onConfirm }) => {
  return (
    <section className="flex flex-col p-8 border rounded-xl not-[]:bg-gradient-to-br from-amber-100 to-yellow-50 items-center justify-center max-w-lg mx-auto shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
        🛒 Order: <span className="text-green-700">{meal.strMeal}</span>
      </h2>

      {/* Meal Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-72 h-72 object-cover rounded-xl shadow-md border-2 border-green-200 mb-6 transition-transform transform hover:scale-105"
      />

      {/* Meal Info */}
      <article className="text-center mb-8 space-y-2">
        <p className="text-lg">
          <span className="font-semibold text-green-600">Cuisine:</span> {meal.strArea}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-green-600">Category:</span> {meal.strCategory}
        </p>
      </article>

      {/* Action Buttons */}
      <div className="flex gap-6">
        <button
          className="not-[]:bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-pink-600 hover:to-red-600 transition-transform transform hover:scale-105"
          onClick={onConfirm}
        >
          ✅ Confirm Order
        </button>

        <button
          onClick={onBack}
          className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition-transform transform hover:scale-105"
        >
          ⬅ Back
        </button>
      </div>
    </section>
  );
};

export default Order;
