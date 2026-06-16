import React from 'react'

const Order = ({meal, onBack, onConfirm, setActiveComponent}) => {

  return (
    <div className=' flex p-4 border rounded items-center justify-center  flex-col bg-amber-100'>
      <h2 className='text-2xl font-bold mb-4'>Order: {meal.strMeal}</h2>
      <img 
        src={meal.strMealThumb} 
        alt= { meal.strMeal} 
        className='h-100 w-100'
      />

      <p className='mb-4'>Cuisine: {meal.strArea}</p>
      <p className='mb-4'>Category: {meal.strCategory}</p>
      <div className='flex gap-4'>
        <button 
        className='bg-blue-400 text-white font-semibold px-4 py-2 rounded'
        onClick={onConfirm}
      >
        Confirm Order
      </button>
    <button 
      onClick={onBack}
      className='ml=2 bg-gray-500 text-white font-semibold px-4 py-2 rouded'
    >
      Back
    </button>
      </div>
    </div>
  )
}

export default Order