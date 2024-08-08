import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalContext";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged,setIsLogged] = state.userApi.isLogged;
  const isadmin = state.userApi.isadmin[0];
  const setIsAdmin =state.userApi.isadmin[1]
  const cart = state.userApi.cart[0]
  console.log(isLogged,setIsLogged)
  const adminRouter = () => {
    return (
      <ul className="flex justify-center gap-x-3 items-center list-none">
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/">View</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        
        </ul>
    );
  };

  
  const loggedRouter = () => {
    return (
     
       <ul className="flex justify-center gap-x-3 items-center list-none">
        <li>
          <Link to="/">Buy</Link>
        </li> 
         <li>
          <Link to="/history">History</Link>
        </li>
        
        
        </ul>
      
    );
  };

  const logoutUser = async() =>{
    await axios.get("http://localhost:5000/user/logout")
    setIsAdmin(false);
    setIsLogged(false);
    localStorage.clear()
  }


  return (
    <header>
      <div className="flex px-4 py-3 text-white justify-between  bg-blue-900 items-center">
        <div>
          <Link to="/">{isadmin ? "Admin" : "XShope"}</Link>
        </div>
        <div className="flex justify-center items-center space-x-2">
         
              {
                isLogged ? ( isadmin ? adminRouter() : loggedRouter()) : 
                <ul className="flex justify-center gap-x-3 items-center">
               <Link to="/">Buy</Link>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
                </ul> 
              }
            {
              isLogged ? <div> <Link to="/login" onClick={logoutUser}>Logout</Link></div> :<div></div>
            }
        </div>

        <div className="flex justify-evenly gap-x-4">
          <button className="md:hidden">
            <FaBars />
          </button>


          { isLogged ? (isadmin ? "" : 
             <Link to="/cart" className="flex justify-center items-center">
              <p>{cart.length}</p>
            <FaCartPlus  />
          </Link>):""}
          

          {/* <button>
            <MdOutlineClose />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
