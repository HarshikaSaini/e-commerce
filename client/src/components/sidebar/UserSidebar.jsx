import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalState } from "../../GlobalContext";
import {Slider,Rate} from "antd"

const UserSidebar = () => {
  const state = useContext(GlobalState);
  const toggleSidebar = state.toggleSidebar;
  const brands = state.brands;
  const updatedCategory = state.updatedCategory;
  const updatedPrice = state.updatedPrice;
  const updatedBrand = state.updatedBrand;
  const selectedBrand = state.selectedBrand;
  const selectedPrice = state.selectedPrice
  const formatter = (value) =>{
       return `${value} Rs`
  }


  return (
    <div className="flex w-full  shadow-md flex-col px-4 py-1 md:py-2 gap-y-1 lg:pt-4 lg:h-full lg:py-3">
      <button
        className="ml-auto hover:bg-gray-200 shadow px-1 py-1 rounded-full lg:hidden"
        onClick={toggleSidebar}
      >
        <IoMdClose />
      </button>
      <div className="w-full px-3 py-2 h-full  flex flex-col  overflow-y-auto  border border-blue-300 rounded-lg shadow-2xl  bg-blue-50 ">
       
        <div className="px-3 ">
          <h2 className="font-bold text-normal md:text-[16px]  font-serif  text-blue-800">
            Choose Category
          </h2>
          <div className="px-4 py-1 ">
            <div>
              <input type="radio" name="category" value="all" onChange={(e) => updatedCategory(e.target.value)} />
              <label className="px-2 font-light text-sm   lg:text-[16px]  text-zinc-500"> All </label>
            </div>
            <div>
              <input type="radio" name="category" value="men" onChange={(e) => updatedCategory(e.target.value)} />
              <label className="px-2 font-light text-sm   lg:text-[16px]  text-zinc-500"> Men </label>
            </div>
            <div>
              <input type="radio" name="category"  value="women" onChange={(e) => updatedCategory(e.target.value)}/>
              <label className="px-2 font-light text-sm  lg:text-[16px]  text-zinc-500"> Women </label>
            </div>
            <div>
              <input type="radio" name="category" value="electronics" onChange={(e) => updatedCategory(e.target.value)} />
              <label className=" px-3 font-light text-sm  lg:text-[16px]  text-zinc-500  ">Electronics </label>
            </div>
          </div>
        </div>


       <div className="px-3 ">
          <h2 className="font-bold font-serif text-normal md:text-[16px]  text-blue-800">
            Choose Price
          </h2>
         <Slider 
           value = {selectedPrice}
           onChange={updatedPrice}
           min = {10}
           max = {2000}
           className="w-full" tooltip={{formatter}} />
        </div>

        <div className="px-3  ">
          <h2 className="font-bold font-serif text-normal md:text-lg  text-blue-800">
            Choose Ratings
          </h2>
          <Rate  className="px-4"/>
        </div>
         

        <div className="px-3 py-1 lg:py-2">
          <h2 className="font-bold font-serif text-normal md:text-[16px]  text-blue-800">
            Choose Brands
          </h2>
          <div className="px-5 py-1 lg:py-2 h-32 lg:h-44 overflow-y-auto">
            <div className="flex flex-col lg:gap-y-2">
             {
              brands.map((items,index) => {
                return (
                  <div key={index} className="flex items-center gap-x-3 ">
                  <input 
                  type="checkbox" 
                  name={items} 
                  value={items} 
                  onChange={() => updatedBrand(items)}
                  checked = {selectedBrand.includes(items)}
                  />
                  <label className="font-light text-sm md:text-[14px] lg:text-[16px] text-zinc-500">{items}</label>
                  </div>
                )
              })
             }
            </div>
          </div>
        </div>

        
        <div className="px-3 py-1 ">
          <h2 className="font-bold font-serif text-normal md:text-[16px]  text-blue-800">
            Choose Tags
          </h2>
          <div className="px-5 py-1 h-44 md:h-48 lg:h-56 overflow-y-auto">
            <div className="flex flex-col lg:gap-y-2">
             {
              brands.map((items , index) => {
                return (
                  <div key={index} className="flex items-center gap-x-3">
                  <input type="checkbox" name={items} value={items}/>
                  <label className="font-light text-sm md:text-[14px] lg:text-[16px] text-zinc-500  ">{items}</label>
                  </div>
                )
              })
             }
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserSidebar;
