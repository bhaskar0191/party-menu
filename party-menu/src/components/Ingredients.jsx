import React from 'react'

const Ingredients = ({ meal, onBack}) => {
  const ingredients = [];

  for (let i = 1; i<=20; i++ ){
    const ingredient = meal [`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== ""){
      ingredients.push({ingredient, measure})
    }
  }
  return (
    <div className='flex p-4 border rounded items-center justify-center  flex-col bg-amber-100 max-h-screen'>
      <h2 className='text-2xl font-bold mb-4'> Ingredients for :{meal.strMeal}</h2>
      <div className='flex flex-row-reverse items-center justify-between gap-x-70'>
        <img 
          src={meal.strMealThumb} 
          alt = { meal.strMeal} 
          className='h-100 w-100'
        />
      <ul className='pl-6 list-none'>
        {ingredients.map((item, index) =>(
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>    
      </div>
      <p className='font-semibold text-sm text-gray-500'><span className='font-bold text-2xl text-green-500'> Instructions : </span>{meal.strInstructions}</p>
      <button
        onClick={onBack}
        className='ml=2 bg-gray-500 text-white font-semibold px-4 py-2 rouded justify-end items-end'
      >
        back
      </button>
    </div>
  )
}

export default Ingredients