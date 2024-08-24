import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalContext'
import ProductList from './ProductList';
import AdminSidebar from "../../components/sidebar/AdminSidebar"
import UserSidebar from "../../components/sidebar/UserSidebar"

const Product = () => {
const state = useContext(GlobalState);
const isadmin = state.userApi.isadmin[0];
const productsList = state.productApi.products[0];
const showSidebar = state.showSidebar;
const selectedCategory = state.selectedCategory;
const selectedPrice = state.selectedPrice;
const selectedBrand = state.selectedBrand;

const filteredData = productsList.filter((items) => {
  return ( 
     (!selectedCategory || items.category.name === selectedCategory) && 
      (items.price === selectedPrice || items.price <= selectedPrice ) &&
      (selectedBrand.length === 0 || selectedBrand.includes(items.brand))
   )
 })

 console.log(productsList)
 console.log(filteredData)
 
  return (
    <div className='flex gap-x-2 w-full overflow-y-hidden h-screen'>
     <div     
     className={`${showSidebar ? "w-[80%] md:w-[50%] lg:w-[25%]" : "hidden lg:flex lg:w-[25%]"} h-full z-10 shadow-sm bg-white flex-shrink-0 fixed lg:relative`}
      >
       {isadmin ? (<AdminSidebar  />) : (<UserSidebar />)}
     </div>
   
     <div className=" h-full flex flex-col w-full  p-3">
     <main className="overflow-y-auto  w-full h-full px-2 py-3 gap-y-6 pb-5 flex flex-col bg-blue-50 rounded-md border border-blue-200">
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 p-3'>
      { filteredData.length === 0 ?
        (productsList.map(item => {
          return <ProductList key={item._id} item={item}
          isadmin={isadmin}
          />
        })):(
          (filteredData.map(item => {
            return <ProductList key={item._id} item={item}
            isadmin={isadmin}
            />
          })))
      }
     </div>
     </main>
     </div>
   </div>
  )
}

export default Product