import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalContext";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { Avatar, Dropdown, Menu } from 'antd';
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged,setIsLogged] = state.userApi.isLogged;
  const setIsAdmin =state.userApi.isadmin[1]
  const userData = state.userApi.userData;

  const logoutUser = async() =>{
    await axios.get("http://localhost:5000/user/logout")
    setIsAdmin(false);
    setIsLogged(false);
    localStorage.clear()
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" className=" capitalize">
       {userData.fname}
      </Menu.Item>

      <Menu.Item key="2">
       Settings
      </Menu.Item>

      <Menu.Item key="3" onClick={logoutUser}>
        Logout
      </Menu.Item>
    </Menu>
  )


  return (
    <header className="w-full">
      <div className="flex px-4 py-3 text-white justify-between  bg-blue-900 items-center w-full">

        <div className="font-bold text-sm sm:text-md md:text-lg nowrap ">
          <Link to="/">Shop X</Link>
        </div>

        <div className=" hidden sm:w-1/3 sm:flex items-center relative">
         <input 
         placeholder="Search..."
         className="w-full text-gray-500 outline-none bg-white rounded-tl-full rounded-bl-full py-1 px-2  md:py-1 md:px-3 lg:py-2 " />
         <button className="bg-black rounded-tr-full rounded-br-full px-2 py-2 md:px-5 md:py-2 lg:py-3">
          <IoSearch className=" size-5 left-2  text-white " />
          </button>
        </div>

        
        {
          isLogged && userData ? (
            <div className="flex items-center justify-between gap-x-2 md:w-[8%] lg:w-[5%]">
            <FaCartPlus className="text-white" size={20}/>
            <Dropdown overlay={menu} trigger={['click']}>
            <Avatar icon={<FaRegUser/>}  
            className="bg-orange-600 p-2 cursor-pointer"/>
            </Dropdown>
          </div>
          ) : (
            <div className="px-0 sm:px-2 flex items-center justify-between gap-x-2 sm:w-[20%] md:w-[17%]  lg:w-[12%]">
              <Link to="/login" className="text-sm font-bold  sm:text-md  border rounded-md px-2 py-1 md:px-2 md:py-1 text-blue-900 bg-white hover:text-white hover:bg-blue-800">Login</Link>
              <Link to="/register" className="text-sm font-bold  sm:text-md  border rounded-md px-2 py-1 md:px-2 md:py-1 text-blue-900 bg-white hover:text-white hover:bg-blue-800">Register</Link>
            </div>
          )
        }
       
      </div>
    </header>
  );
};

export default Header;
