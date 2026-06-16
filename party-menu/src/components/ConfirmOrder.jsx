import React from 'react';

const ConfirmOrder = ({ meal, onBack }) => {
  return (
    <div className="p-6 border rounded shadow bg-green-50 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🎉 Order Confirmed!
      </h2>
      <p className="mb-4">
        Your order for <span className="font-semibold">{meal.strMeal}</span> has been placed successfully.
      </p>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-64 mx-auto rounded mb-4"
      />
      <button
        onClick={onBack}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Back to Search
      </button>
    </div>
  );
};

export default ConfirmOrder;
