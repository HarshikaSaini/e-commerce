import React from "react";
import ButtonRender from "./ButtonRender";
import CarouselComp from "../../components/CarouselComp";
import { Rate } from "antd";
const ProductList = ({ item }) => { 
  const contentStyle = {
    
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    
  }
  return (
   
    <>
      <div key={item._id} className="flex flex-col bg-white gap-y-1 shadow-md border rounded-md">
       
          <CarouselComp style={contentStyle} >
            {
              item.images.map((x,index) => (
              <img key={index}
                className="w-full h-44 sm:h-72 md:h-80 lg:h-96"
                src={x.url}
                alt="pic"
              />
              ))
            }
          
          </CarouselComp>
       

        <div className="px-2 pb-3 sm:py-2 h-26 sm:h-38 md:h-38 lg:h-40 flex flex-col justify-evenly w-full">
          <h1 
          className="text-sm sm:text-[18px] md:text-xl font-semibold text-gray-500 capitalize font-serif">
           Product: {item.title}</h1>
          <p className="text-sm sm:text-[14px] md:text-[16px]  font-medium text-gray-500 font-sans">Price : Rs.{item.price}/-</p>
          <p className="text-sm sm:text-[14px] md:text-[15px]  font-normal text-gray-500 capitalize font-sans line-clamp-2">{item.desc}</p>
          <p className="text-sm sm:text-[14px] md:text-[15px]  font-normal text-gray-500 capitalize font-sans">Ratings : <Rate disabled value={item.ratings} /></p>
          <ButtonRender item={item} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
