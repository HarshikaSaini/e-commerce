import React, { useContext } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import { message } from 'antd';

const LoginPage = () => {
  const {register, handleSubmit,formState:{errors}} = useForm()
  
  const userSubmit = async(data) =>{
  console.log(data)
  try {
      await axios.post("http://localhost:5000/user/login",data)
      localStorage.setItem("firstLogin", true);
      message.success("Login Successfull")
      window.location.href="/"
   } catch (err) {
     alert(err.response.data.msg);
   }
  }


  return (
    <div className='flex flex-col px-3 py-5 mt-5 rounded-lg w-full h-full gap-y-4'>
    <form onSubmit={handleSubmit(userSubmit)} className='flex flex-col gap-y-5 mx-4'>
      <div>
      
      <Input 
      className=" border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 "
      placeholder="Enter your Email address"
      type="email"
      label="Email" {...register("email", {
       required:"Enter your email address !"
      })}
      />
   
      {errors.email && <p className='text-red-500 px-2 text-sm'>{errors.email.message}</p>}
   
      </div>

      <div>
     
      <Input 
      className=" border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 "
      placeholder="Enter your password"
      type="password"
      label="Password" {...register("password", {
       required:"Enter your password !"
      })}
      />
   
      {errors.password && <p className='text-red-500 px-2 text-sm'>{errors.password.message}</p>}
      </div>

      <button 
      type="submit"
      className='w-1/2 md:w-1/4  bg-blue-800 hover:bg-blue-700 text-white px-3 py-2 m-auto mt-6 rounded-3xl'
      >Login
      </button>  
    </form>


    </div>
  )
}

export default LoginPage