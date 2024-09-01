import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import Input from '../../components/Input';
import {message} from "antd"
import { GlobalState } from '../../GlobalContext';

const RegisterPage = () => {

const state = useContext(GlobalState)
const setIsLogged = state.userApi.isLogged[1]


const {register , handleSubmit , formState:{errors}} = useForm();
const navigate = useNavigate();

const FormSubmit = async(data) =>{
   try {
     await axios.post("https://e-commerce-qpda.onrender.com/user/register",data);
     localStorage.setItem("firstRegister",true);
     setIsLogged(true);
     message.success("Regisration Successfull !!")
     navigate("/")
     
   } catch (err) {
    console.log(err.response.data.msg)
   }
}


  return (
   <div className='flex flex-col px-3 py-5 rounded-lg w-full h-full gap-y-4'>
    <form onSubmit={handleSubmit(FormSubmit)} className='flex flex-col gap-y-5 w-full'>
   <div className='flex flex-col'>
    <Input
    className=" border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 "
    placeholder="Enter  first name"
    label="First Name" {...register("fname",{
      required:true,
      maxLength:20
    })} 

    />
    {errors.fname && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>First name is required !</p>}
    </div>

    <div>
    <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none py-1 '
    placeholder="Enter last name"
    label="Last Name" {...register("lname",{
      required:"Last name is required !",
      maxLength:20
    })} 
    />
    {errors.lname && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Last name is required !</p>}
   </div>

   <div>
<Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    placeholder="Enter email"
    label="Email" 
    type="email"
    {...register("email",{
      required:"Enter valid email address!",
      
    })} 
    />
    {errors.email && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Email is required !</p>}
    </div>

    <div>
<Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    placeholder="Enter password"
    label="Password" 
    type="password"
    {...register("password",{
      required:true,
      minLength:6
    })} 
    />
    {errors.password && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Password length should be atleast 6.</p>}
    </div>

    <div >
    
   <Input
    className=' focus:border-blue-500 outline-none  rounded-none  '
    label="Admin"
    type="radio" 
    value="admin"
    {...register("role",{
      required:true,
    })} 
   
    /> 

<Input
    className=' focus:border-blue-500 outline-none  rounded-none  '
    label="Customer"
    type="radio" 
    value="customer"
    {...register("role",{
      required:true,
    })} 
     
    /> 
    {errors.role && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'> Register as Admin or Customer.</p>}
    </div>

    <div>
    <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="Address" 
    type="text"
    placeholder="Enter house no. "
    {...register("houseNumber",{
      required:true
    })} 
    />
    {errors.houseNumber && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Enter your house address !</p>}
    </div>
    <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="City" 
    type="text"
    placeholder="Enter city"
    {...register("city",{
      required:true
    })} 
    />
    {errors.city && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Enter your City !</p>}
    </div>

    <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="State" 
    type="text"
    placeholder="Enter state"
    {...register("state",{
      required:true
    })} 
    />
   {errors.state && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm'>Enter your state !</p>}
   </div>


   <div>
   <Input
    className='border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 rounded-none  py-1'
    label="Mobile No." 
    placeholder="Contact number"
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
    {errors.phone && <p className='text-red-500 px-1 w-full md:w-1/2 lg:w-1/4  md:m-auto text-sm  '>{errors.phone.message}!</p>}

    </div>
    
    <button 
      type="submit"
      className='w-full md:w-1/4  lg:w-1/6 bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 mt-4 m-auto rounded-lg'>Register</button>
    </form>


    </div>
  )
}

export default RegisterPage