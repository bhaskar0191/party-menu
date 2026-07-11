import React from 'react'
import axios from 'axios'


const Logout = ({setIsLoggedIn, setActiveComponent}) => {

    const heandleLogout = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}user/logout`, {}, {
                withCredentials: true
            })
            if(res.status === 200){
                localStorage.removeItem('token')
                setActiveComponent('home')
                setIsLoggedIn(false)
                alert(res.data.message)
            }else {
               console.log("")
               alert("Logout Failed")
            }
        }
        catch(err){
            console.error("Logout Failled", err)
            alert("An error occurred while trying to logout.");
        }
    }
   
  return (
    <button 
      onClick={heandleLogout}
      className='font-bold hover: underline ml-4 text-white' 
    >
        Logout
    </button>
  )
}

export default Logout