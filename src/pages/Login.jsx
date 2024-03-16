import React, { useState, useContext } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { BASE_URL } from '../config.js'
import { toast } from 'react-toastify'
import { authContext } from '../context/AuthContext.jsx'
import axios from 'axios';

const Login = () => {

   const [formData,setFormData] = useState({
    email:'',
    password:''
   })

   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
   const {dispatch}= useContext(authContext)

   const handleInputChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value})
   }

   const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      console.log(formData);
      const res = await axios.post(`${BASE_URL}/auth/login`, formData);
  
      const result = res.data;
  
      if (!res.ok) {
        throw new Error(result.message);
      }
  
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        }
      });
      console.log(result, "login data")
  
      setLoading(true);
      toast.success(result.message);
      navigate('/home');
  
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (

    <section>
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className=' to-headingColor text-[22px] leading-9 font-bold mb-10 '> Hello 
        <span className=' text-cyan-950'> Welcome</span> Back</h3>
        <form action="" className=' py-4 md:py0 ' onSubmit={submitHandler}>
          <div className="mb-5">
            <input type="email" placeholder='Enter your email ' name='email' value={formData.email} onChange={ handleInputChange} className=' w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-cyan-950 text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
          </div>
          <div className="mb-5">
            <input type="password" placeholder='Password ' name='password' value={formData.password} onChange={ handleInputChange} className=' w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-cyan-950 text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
          </div>

        <div className="mt-7">
          <button type='submit' className=' w-full bg-cyan-950 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
        </div>

        <p className=' mt-5 text-textColor text-center '>Don't have an account? <Link to='/register' className=' text-cyan-950 font-medium ml-1'> Register</Link></p>
        </form>
      </div>
    </section>
    )
}

export default Login