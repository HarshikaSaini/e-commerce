import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalContext'
import ProductList from './ProductList';


const Product = () => {
const state = useContext(GlobalState);
const isadmin = state.userApi.isadmin[0];
const productsList = state.productApi.products[0];
console.log(productsList)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 p-3'>
      {
        productsList.map(item => {
          return <ProductList key={item._id} item={item}
          isadmin={isadmin}
          />
        })
      }
    </div>
  )
}

export default Product