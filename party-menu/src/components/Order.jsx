import React from 'react';

const Order = ({ meal, onBack, onConfirm, setActiveComponent }) => {
  return (
    <section className="flex flex-col p-6 border rounded bg-amber-100 items-center justify-center max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order: {meal.strMeal}</h2>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-64 h-64 object-cover rounded shadow mb-4"
      />

      <article className="text-center mb-6">
        <p className="mb-2 text-lg">
          <span className="font-semibold">Cuisine:</span> {meal.strArea}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold">Category:</span> {meal.strCategory}
        </p>
      </article>

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={onConfirm}
        >
          Confirm Order
        </button>

        <button
          onClick={onBack}
          className="ml-2 bg-gray-600 text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Order;
