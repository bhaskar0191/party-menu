import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Order from '../components/Order'
import Ingredients from '../components/Ingredients'
import Search from '../components/Search'
import ConfirmOrder from '../components/ConfirmOrder'
import Register from '../components/Register.jsx'
import Login from '../components/Login.jsx';

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeComponent, setActiveComponent] = useState("search")
  const [meals, setMeals] = useState([])
  const [user, setUser] = useState(null)
  const [selectedMeal, setSelectedMeal] = useState(null)

  const handleOrder = (meal) => {
    setSelectedMeal(meal)
    setActiveComponent("order")
  }

  const handleIngredients = (meal) => {
    setSelectedMeal(meal)
    setActiveComponent("ingredients")
  }
  const handleBack = () => {
    setSelectedMeal(null)
    setActiveComponent("search")
  }

  const handleConfirmOrder = () => {
    setActiveComponent("confirm")
  }

  return (
    <div>
      <Navbar
        setMeals={setMeals}
        setActiveComponent={setActiveComponent}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
         user={user}
      />
      {activeComponent === "search" && (
        <Search
          meals={meals}
          handleOrder={handleOrder}
          handleIngredients={handleIngredients}
          user={user}
        />
      )}
      {activeComponent === "register" && (
        <Register 
          setActiveComponent={setActiveComponent}
          setIsLoggedIn={setIsLoggedIn}
         />
      )}
      {activeComponent === "login" && (
        <Login 
         setLoggedIn={setIsLoggedIn}
         setActiveComponent={setActiveComponent}
         setUser={setUser} 
        />
      )}
      {activeComponent === "order" && selectedMeal && (
        <Order meal={selectedMeal} onConfirm={handleConfirmOrder} onBack={handleBack} />
      )}

      {activeComponent === "ingredients" && selectedMeal && (
        <Ingredients meal={selectedMeal} onBack={handleBack} />
      )}

      {activeComponent === "confirm" && selectedMeal && (
        <ConfirmOrder meal={selectedMeal} onBack={handleBack} />
      )}
    </div>
  )
}

export default Homepage