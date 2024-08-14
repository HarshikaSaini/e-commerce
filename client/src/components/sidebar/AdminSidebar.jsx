import React from 'react'
import {Link} from "react-router-dom"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import {Divider} from "@mui/material"
const AdminSidebar = () => { 
  return (
    <div className='w-[25%] flex flex-col px-6 py-5 h-auto bg-gray-50 overflow-hidden gap-y-7 overflow-y-auto'>
      <div className='w-full text-center hover:bg-blue-600 hover:text-white rounded-xl bg-blue-100 border  border-blue-300 text-blue-600 px-3 py-1 font-semibold text-lg'>
        Admin Panel</div>
    
        <div>
          <Link
          className='flex items-center hover:text-blue-600 justify-start gap-x-1 px-3 font-medium text-md '
          to="/dashboard">
          <span><LuLayoutDashboard className='h-5 w-5' /></span> Dashboard
          </Link>
        </div>
          <Divider orientation='horizontal' className='w-full'/>
          <div>
          <Link
          className='flex items-center hover:text-blue-600 justify-start gap-x-1 px-3 font-medium text-md '
          to="/create_product">
          <span><MdOutlineAddBox className='h-5 w-5' /></span> Create Product
          </Link>
        </div>
          <Divider orientation='horizontal' className='w-full'/>

          <div>
          <Link
          className='flex items-center hover:text-blue-600 justify-start gap-x-1 px-3 font-medium text-md ' 
          to="/">
          <span><GrCatalog className='h-5 w-5' /></span> Catalogue
          </Link>
        </div>
          <Divider orientation='horizontal' className='w-full'/>

          <div>
          <Link
          className='flex items-center hover:text-blue-600 justify-start gap-x-1 px-3 font-medium text-md '
          to="/settings">
          <span><IoSettingsSharp className='h-5 w-5' /></span> Settings
          </Link>
        </div>
          
     
    </div>
  )
}

export default AdminSidebar