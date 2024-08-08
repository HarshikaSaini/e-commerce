import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import Input from '../../components/Input';
import {message} from "antd"
const RegisterPage = () => {
 const {register , handleSubmit , formState:{errors}} = useForm();
const navigate = useNavigate();



const FormSubmit = async(data) =>{
   console.log(data)
   try {
     await axios.post("http://localhost:5000/user/register",data);
     localStorage.setItem("firstRegister",true);
     message.success("Regisration Successfull !!")
     navigate("/")
      
   } catch (err) {
    console.log(err.response.data.msg)
   }
}

  return (
   <div className='flex flex-col px-3 py-5 rounded-lg w-full h-full gap-y-4'>
    <form onSubmit={handleSubmit(FormSubmit)} className='flex flex-col gap-y-5'>
   <div>
    <Input
    className=" border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 "
    placeholder="Enter your First Name"
    label="First Name" {...register("fname",{
      required:true,
      maxLength:20
    })} 
    />
    {errors.fname && <p className='text-red-500 px-2 text-sm'>First name is required !</p>}
    </div>

    <div>
    <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 '
    placeholder="Enter your last name"
    label="Last Name" {...register("lname",{
      required:"Last name is required !",
      maxLength:20
    })} 
    />
    {errors.lname && <p className='text-red-500 px-2 text-sm'>Last name is required !</p>}
   </div>

   <div>
<Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    placeholder="Enter your email"
    label="Email" 
    type="email"
    {...register("email",{
      required:"Enter valid email address!",
      
    })} 
    />
    {errors.email && <p className='text-red-500 px-2 text-sm'>Email is required !</p>}
    </div>

    <div>
<Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    placeholder="Enter your password"
    label="Password" 
    type="password"
    {...register("password",{
      required:true,
      minLength:6
    })} 
    />
    {errors.password && <p className='text-red-500 px-2 text-sm'>Password length should be atleast 6.</p>}
    </div>

    <div>
    <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="Role" 
    placeholder="Enter your role"
    {...register("role",{
      required:true,
    })} 
    />
    {errors.role && <p className='text-red-500 px-2 text-sm'>Enter 1. - If Registering as Admin or Enter 0. - If registering as customer.</p>}
    </div>

    <div>
    <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="Address" 
    type="text"
    placeholder="Enter your house address"
    {...register("houseNumber",{
      required:true
    })} 
    />
    {errors.houseNumber && <p className='text-red-500 px-2 text-sm'>Enter your house address !</p>}
    </div>
    <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="City" 
    type="text"
    placeholder="Enter your city"
    {...register("city",{
      required:true
    })} 
    />
    {errors.city && <p className='text-red-500 px-2 text-sm'>Enter your City !</p>}
    </div>

    <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="State" 
    type="text"
    placeholder="Enter your state"
    {...register("state",{
      required:true
    })} 
    />
   {errors.state && <p className='text-red-500 px-2 text-sm'>Enter your state !</p>}
   </div>


   <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="Mobile No." 
    placeholder="Enter your mobile number"
    {...register("phone",{
      required:"Phone number is required.",
      minLength:{
       value:10,
       message:"Phone number cannot be less than 10 digits"
      },
      maxLength:{
        value: 10,
      message: "Phone number cannot exceed 10 digits"
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Enter a valid phone number"
      }
    })} 
    />
    {errors.phone && <p className='text-red-500 px-2 text-sm'>{errors.phone.message}!</p>}

    </div>
    {/* <label for="name">
      Name:{" "}
      <input
      
      type="text" name="name" value={user.name} onChange={onInputChange}/>
    </label> */}
    {/* <label for="name">
      Email:{" "}
      <input
      className='border border-gray-400 mr-2'
      type="email" name="email" value={user.email} onChange={onInputChange}/>
    </label>
    <label>
      Password:{" "}
      <input 
      className='border border-gray-400 mr-2'
      type="password" name="password" value={user.password} onChange={onInputChange}/> 
    </label>

    <div>
      
      <Link to="/login">Login</Link>
    </div> */}
      
    <button 
      type="submit"
      className='w-full md:w-1/2  bg-blue-900 hover:bg-blue-700 text-white px-3 py-2 m-auto rounded-lg'>Register</button>
    </form>


    </div>
  )
}

export default RegisterPage