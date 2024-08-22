import React,{useContext} from 'react'
import { GlobalState } from '../../GlobalContext'
import { Link } from "react-router-dom";

const ButtonRender = ({item}) => {

  const state = useContext(GlobalState);
  const isadmin = state.userApi.isadmin[0];
  const addCart = state.userApi.addCart;
  const handleAddToCart = () => {
    addCart(item);
  };

  return (
    <div>{isadmin  ? (
        <div className="flex justify-end items-center gap-x-2">
          <button className="text-sm sm:text-[15px] md:text-[16px] border px-2 py-1 sm:px-2 md:px-4 lg:px-5    bg-blue-700 hover:bg-blue-600 text-white rounded-md">
           Delete
          </button>
          <button className="text-sm sm:text-[15px] md:text-[16px] border px-2 py-1 sm:px-2 md:px-4 lg:px-5   bg-blue-700 hover:bg-blue-600 text-white rounded-md">
            Edit
          </button>
          {/* <button className="text-sm sm:text-[15px] md:text-[16px] border px-2 py-1 sm:px-2 md:px-4 lg:px-5    bg-blue-900 hover:bg-blue-700 text-white rounded-xl">
           Buy
          </button> */}
        </div>
       ) : (
        <div className="flex justify-end items-center gap-x-2">
         <button 
          className="text-sm sm:text-[15px] md:text-[16px] border px-2 py-1 sm:px-2 md:px-4 lg:px-5  bg-blue-900 hover:bg-blue-800 text-white rounded-md" 
          onClick={handleAddToCart}>Buy
          </button>
          
          <button className="text-sm sm:text-[15px] md:text-[16px] border px-2 py-1 sm:px-2 md:px-4 lg:px-5 bg-blue-900 hover:bg-blue-700 text-white rounded-md">
            <Link to={`/detail/${item._id}`}>View</Link>
          </button>
        </div>
      )}</div>
  )
}

export default ButtonRender