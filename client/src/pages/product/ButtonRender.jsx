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
        <div className="flex justify-between items-center">
          <button className="border px-5 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-xl">
            <Link to="#">Delete</Link>
          </button>
          <button className="border px-5 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-xl">
            <Link to="#">Edit</Link>
          </button>
        </div>
       ) : (
        <div className="flex justify-between items-center">
         <button className="border px-5 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-xl"> 
            <Link to="#" onClick={handleAddToCart}>Buy</Link>
          </button>
          
          <button className="border px-5 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-xl">
            <Link to={`/detail/${item._id}`}>View</Link>
          </button>
        </div>
      )}</div>
  )
}

export default ButtonRender