import React from "react";

const ConfirmOrder = ({ meal, onBack }) => {
  return (
    <div className="p-8 border rounded-xl shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 text-center max-w-lg mx-auto animate-fadeIn">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-green-700 mb-4">
        🎉 Order Confirmed!
      </h2>

      {/* Confirmation Message */}
      <p className="mb-6 text-lg text-gray-700">
        Your order for{" "}
        <span className="font-semibold text-green-800">{meal.strMeal}</span> has
        been placed successfully. Sit back and relax while we prepare your meal!
      </p>

      {/* Meal Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-72 h-72 object-cover mx-auto rounded-xl shadow-md border-2 border-green-200 mb-6 transition-transform transform hover:scale-105"
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-green-700 hover:to-green-800 transition-transform transform hover:scale-105"
      >
        ⬅ Back to Search
      </button>
    </div>
  );
};

export default ConfirmOrder;
