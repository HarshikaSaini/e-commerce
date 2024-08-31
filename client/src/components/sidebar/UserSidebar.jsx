import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalState } from "../../GlobalContext";
import {Slider,Rate, Badge, Tag} from "antd"


const UserSidebar = () => {
  const state = useContext(GlobalState);
  const toggleSidebar = state.toggleSidebar;
  const [tag] = state.tagApi.tags
  const brands = state.brands;
  const updatedCategory = state.updatedCategory;
  const updatedPrice = state.updatedPrice;
  const updatedBrand = state.updatedBrand;
  const updatedRating = state.updatedRatings;
  const updatedTag = state.updatedTag;

  const selectedBrand = state.selectedBrand;
  const selectedPrice = state.selectedPrice
  const selectedRating = state.selectedRating
  const selectedTag = state.selectedTag
   
  const formatter = (value) =>{
       return `${value} Rs`
  }
 
 const colors = [
  { border: "#f56969", text: "#f56969", background: "#fff0f0" },
   
    { border: "#71ad7d", text: "#71ad7d", background: "#e6f7e9" },
    { border: "#00487d", text: "#00487d", background: "#dcf0fc" },
    { border: "#da6ff7", text: "#da6ff7", background: "#f4e9f7 " },
    { border: "#ff9400", text: "#ff9400", background: "#fff1bf " },
    { border: "#002db3", text: "#002db3", background: "#dcf0fc" },
]
  

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
          <h2 className="font-bold text-xs md:text-[16px]  font-serif  text-blue-800">
            Choose Category
          </h2>
          <div className="px-4 py-1 ">
            <div>
              <input type="radio" name="category" value="all" onChange={(e) => updatedCategory(e.target.value)} />
              <label className="px-2 font-light text-xs md:text-sm   lg:text-[16px]  text-zinc-500"> All </label>
            </div>
            <div>
              <input type="radio" name="category" value="men" onChange={(e) => updatedCategory(e.target.value)} />
              <label className="px-2 font-light text-xs md:text-sm   lg:text-[16px]  text-zinc-500"> Men </label>
            </div>
            <div>
              <input type="radio" name="category"  value="women" onChange={(e) => updatedCategory(e.target.value)}/>
              <label className="px-2 font-light text-xs md:text-sm  lg:text-[16px]  text-zinc-500"> Women </label>
            </div>
            <div>
              <input type="radio" name="category" value="electronic" onChange={(e) => updatedCategory(e.target.value)} />
              <label className=" px-3 font-light text-xs md:text-sm  lg:text-[16px]  text-zinc-500  ">Electronic</label>
            </div>
          </div>
        </div>


       <div className="px-3 ">
          <h2 className="font-bold font-serif text-xs md:text-[16px]  text-blue-800">
            Choose Price
          </h2>
         <Slider 
           value = {selectedPrice}
           onChange={updatedPrice}
           min = {100}
           max = {3000}
           className="w-full" tooltip={{formatter}} />
        </div>

        <div className="px-3  ">
          <h2 className="font-bold font-serif  text-xs md:text-[16px]   text-blue-800">
            Choose Ratings
          </h2>
          <Rate value={selectedRating} onChange={updatedRating} className="px-4"/>
        </div>
         

        <div className="px-3 py-1 lg:py-2">
          <h2 className="font-bold font-serif text-xs  md:text-[16px]  text-blue-800">
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
          <h2 className="font-bold font-serif text-xs  md:text-[16px]  text-blue-800">
            Choose Tags
          </h2>
          <div className="px-5 py-2 h-44 md:h-48 lg:h-64 overflow-y-auto">
            <div className="flex flex-wrap gap-1 lg:gap-2">
             {
              tag.map((items , index) => {
                const color = colors[index % colors.length];
               
                return (
                <Tag.CheckableTag  
               
                key={index}
                onChange={() => updatedTag(items.name)}
                checked = {selectedTag.includes(items.name)}
                style={{
                  borderColor: selectedTag.includes(items.name) ? "blue" : color.border,
                  color: selectedTag.includes(items.name) ? "white" : color.text,
                  backgroundColor: selectedTag.includes(items.name) ? "blue" : color.background,
                }}
                className={`${selectedTag.includes(items.name) ? "border border-blue-500 text-white" : ""} px-1 lg:py-1 lg:px-3  rounded-full  lg:font-normal lg:text-sm`}
                >
                  {items.name} </Tag.CheckableTag>
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
