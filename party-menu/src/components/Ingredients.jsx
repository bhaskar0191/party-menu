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
    <section className="flex flex-col p-6 border rounded bg-amber-100 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">
        Ingredients for: {meal.strMeal}
      </h2>

      <article className="flex flex-row items-start justify-between gap-x-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-64 h-64 object-cover rounded shadow"
        />

        <ul className="list-disc pl-6">
          {ingredients.map((item, index) => (
            <li key={index} className="text-lg">
              <span className="font-semibold">{item.ingredient}</span> - {item.measure}
            </li>
          ))}
        </ul>
      </article>

      <p className="mt-6 text-gray-700 text-sm leading-relaxed">
        <span className="block font-bold text-xl text-green-600 mb-2">
          Instructions:
        </span>
        {meal.strInstructions}
      </p>

      <button
        onClick={onBack}
        className="mt-6 self-end bg-gray-600 text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Back
      </button>
    </section>
  );
};

export default Ingredients;
