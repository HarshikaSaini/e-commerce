import React from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar.jsx";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
const DashboardAdmin = () => {
  return (
    <div className="flex gap-x-2 w-full overflow-y-hidden h-full">
      <AdminSidebar />
      <div className=" h-full flex flex-col w-full overflow-y-auto p-3">
        <main className="w-full h-full  pb-5 flex flex-col bg-blue-50 rounded-md border border-blue-200">
          <h1 className="font-semibold font-serif text-blue-800  px-3 py-4 text-lg">
            Welcome To{" "}
            <span className="text-2xl font-extrabold text-orange-600 mx-3">
              SHOPX
            </span>{" "}
            Selling Coach..
          </h1>
          <div className="grid grid-cols-3 gap-3 px-3">
            <div
              className="bg-white  flex flex-col py-3
            rounded-md shadow-md border-gray-100  cursor-pointer "
            >
              <div className="flex items-center justify-center text-lg gap-x-1 font-medium py-3">
                <MdOutlineInventory className="h-7 w-7 " />
                <h1>Inventory</h1>
              </div>
              <h1 className="m-auto text-lg text-gray-500 font-semibold">10</h1>
            </div>

            <div className="bg-white  flex flex-col py-3
            rounded-md shadow-md border-gray-100  cursor-pointer ">
               <div className="flex items-center justify-center text-lg gap-x-1 font-medium py-3">
                <MdOutlinePriceCheck className="h-7 w-7 " />
                <h1>Pricing</h1>
              </div>
              <h1 className="m-auto text-lg text-gray-500 font-semibold">10</h1>               

            </div>
            
            <div  className="bg-white  flex flex-col py-3
            rounded-md shadow-md border-gray-100  cursor-pointer ">
              <div className="flex items-center justify-center text-lg gap-x-1 font-medium py-3">
                <FaChartLine className="h-7 w-7 " />
                <h1>Growth</h1>
              </div>
              <h1 className="m-auto text-lg text-gray-500 font-semibold">10</h1> 
            </div>
          </div>


        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
