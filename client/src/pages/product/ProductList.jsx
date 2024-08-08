import React from "react";
import ButtonRender from "./ButtonRender";
const ProductList = ({ item ,isadmin }) => {
  
  return (
    <>
      {isadmin && <input type="checkbox" />}
      <div key={item._id} className="flex flex-col gap-y-2 border rounded-md">
        <div className="w-full h-[60%]">
          <img
            className="w-full h-full"
            src={item.pic}
            alt="pic"
          />
        </div>
        <div className="px-6 py-2 h-[40%] flex flex-col justify-evenly w-full">
          <h1 className="text-xl font-bold text-gray-700 capitalize font-serif">{item.title}</h1>
          <p className="text-lg font-semibold text-gray-500 font-sans">{item.desc}</p>
          <p className="text-lg font-semibold text-gray-500 font-sans">Price - Rs.{item.price}/-</p>
          <ButtonRender item={item} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
