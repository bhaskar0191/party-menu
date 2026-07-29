import React from 'react';

const Ingredients = ({ meal, onBack }) => {
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient && ingredient.trim() !== ""
      ? { ingredient, measure }
      : null;
  }).filter(Boolean);

  return (
    <section className="flex flex-col p-6 border rounded-lg not-[]:bg-gradient-to-br from-amber-100 to-yellow-50 shadow-lg max-h-screen overflow-y-auto">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
        🍽 Ingredients for: <span className="text-green-700">{meal.strMeal}</span>
      </h2>

      {/* Image + Ingredients */}
      <article className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full md:w-72 h-72 object-cover rounded-xl shadow-md border-2 border-green-200"
        />

        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {ingredients.map((item, index) => (
            <li key={index} className="leading-relaxed">
              <span className="font-semibold text-green-600">{item.ingredient}</span>
              <span className="ml-2 text-gray-500">({item.measure})</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Instructions */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-bold text-xl text-green-700 mb-3">📖 Instructions</h3>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mt-6 self-end bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        ⬅ Back
      </button>
    </section>
  );
};

export default Ingredients;
