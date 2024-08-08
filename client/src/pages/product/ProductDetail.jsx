import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../GlobalContext'
import {useParams, Link} from "react-router-dom"

const ProductDetail = () => {
  const [details , setDetails] = useState([]);
  const params = useParams()
  const state = useContext(GlobalState)
  const [products] = state.productApi.products;
  const addCart = state.userApi.addCart;
  useEffect(()=>{
  
    if(params){
      products.forEach(element => {
        if(element._id === params.id){
          setDetails(element)
        }
      });
    }

  },[params,products])

  
  if(details.length === 0 ) return null;

 const handleAddtocart =()=>{
  addCart(details);
 }

  return (
    <div className='flex justify-around w-full h-1/2 mt-2 px-5 py-3'>
      
      <div className='w-1/2 h-full'>
        <img 
        className='w-full h-full'
        src={details.pic} alt=""/>
      </div>

      <div className='flex flex-col gap-y-2 py-4'>
       <h1 className='font-bold text-xl capitalize text-gray-700'>{details.title}</h1>
       <p className='font-normal text-lg text-gray-600'>Price - Rs.{details.price}/-</p>
       <p className='font-normal text-lg text-gray-600'>Description - {details.desc}</p>
       <p className='font-normal text-lg text-gray-600'>Items Sold - {details.sold}</p>
       <button 
       onClick={handleAddtocart}
       className="border px-1 py-1 bg-blue-900 text-white rounded-xl">
            <Link to="/cart">
              Buy Now
            </Link>
        </button>
      </div>
    </div>
  )
}

export default ProductDetail