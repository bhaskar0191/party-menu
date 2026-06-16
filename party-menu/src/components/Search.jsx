import React from 'react'

const Search = ({meals, handleOrder, handleIngredients}) => {
 
  return (
       <div className='flex flex-col items-center-safe justify-center border overflow-x-clip'>
        {/* Render search results */}
        <h2 className="text-xl font-bold mt-6 mb-4">Search Results</h2>
        <ul className="grid grid-cols-3 gap-4">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="border rounded p-2 shadow hover:shadow-lg"
              >
                <h3 className="font-semibold">{meal.strMeal}</h3>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full rounded mt-2"
                /> 
                <div className='flex gap-2 '>
                  <button
                   className='border-2 rounded bg-blue-400 w-40 h-10 m-2 text-white font-semibold text-sm'
                   onClick={() => handleOrder(meal)}
                   >
                    Order
                  </button>
                  <button 
                    className='border-2 rounded bg-green-400 w-40 h-10 m-2 text-white font-semibold text-sm'
                    onClick={() => handleIngredients(meal)}
                  >
                    Ingredients
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No meals found. Try searching!</p>
          )}
        </ul>
      </div>
  )
}

export default Search