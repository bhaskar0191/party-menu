import React,{useState} from 'react'
import axios from 'axios'



const Register = ({setIsLoggedIn, setActiveComponent}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeHeandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSumitHeandler = async(e) => {
        e.preventDefault()
        try {
           const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`, formData, 
            { withCredentials: true
          })
           console.log("User registered successfully.", res.data)
           alert("User registered successfully")
           setIsLoggedIn(true)
           setActiveComponent('home')  
        }catch(err){
            console.error("server Error", err)
        }
        
    }
  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2  className="text-2xl font-bold text-center mb-6">Register</h2>
            <form className='space-y-6' onSubmit={onSumitHeandler}>
                <div>
                    <label className='blak text-sm text-gray-500 font-medium mb-1'>Name</label>
                    <input 
                      name='name'
                      type="text"
                      onChange={changeHeandler}
                      value={formData.name} 
                      placeholder='Enter Your Name'
                      className='w-full border border-gray-400 rounded-md p-2 focus: ring-2 focus:ring-gray-300 hover:border-blue-400 outline-none'
                    />
                </div>
                 <div>
                    <label className='blak text-sm text-gray-500 font-medium mb-1'>Email</label>
                    <input 
                      name='email'
                      type="email"
                      onChange={changeHeandler}
                      value={formData.email} 
                      placeholder='Enter Your Email'
                      className='w-full border border-gray-400 rounded-md p-2 focus: ring-2 focus:ring-gray-300 hover:border-blue-400 outline-none'
                    />
                </div>
                 <div>
                    <label className='blak text-sm text-gray-500 font-medium mb-1'>Password</label>
                    <input 
                      name='password'
                      type="password"
                      onChange={changeHeandler}
                      value={formData.password} 
                      placeholder='Enter Your Password'
                      className='w-full border border-gray-400 rounded-md p-2 focus: ring-2 focus:ring-gray-300 hover:border-blue-400 outline-none'
                    />
                </div>
                <button
                  type='submit' 
                  className='bg-blue-600 rounded-md p-3 w-full text-white hover:bg-blue-800 transition-colors'
                >
                  Register
                </button>
            </form>
            <p className='text-sm text-gray-500 mt-4'>
                Already have an account? 
                   <button 
                    onClick={() => setActiveComponent('login')}
                     className='text-blue-600 hover:underline'>Log In
                </button>
           </p>
        </div>
    </div>
  )
}

export default Register