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

  const colors = [
    { border: "#f56969", text: "#f56969", background: "#fff0f0" },
   
    { border: "#71ad7d", text: "#71ad7d", background: "#e6f7e9" },
    { border: "#00487d", text: "#00487d", background: "#dcf0fc" },
    { border: "#da6ff7", text: "#da6ff7", background: "#f4e9f7 " },
    { border: "#ff9400", text: "#ff9400", background: "#fff1bf " },
    { border: "#002db3", text: "#002db3", background: "#dcf0fc" },]

  return (
    
    <>
      <div key={item._id} className="flex flex-col bg-white gap-y-2 shadow-md border rounded-md">
       
          <CarouselComp style={contentStyle} >
            {
              item.images.map((x,index) => (
              <img key={index}
                className="w-full h-52  rounded-tr-md rounded-tl-md sm:h-72 md:h-80 lg:h-96"
                src={x.url}
                alt="pic"
              />
              ))
            }
          
          </CarouselComp>
       

        <div className="px-2 pb-3 sm:py-2 h-32  md:h-36 lg:h-48 flex flex-col justify-evenly w-full">
          <div className="flex justify-between items-center">
            <h1 
              className="text-sm sm:text-[18px] md:text-xl font-semibold text-gray-500 capitalize font-serif">
              {item.title}</h1>
             <h3 className="capitalize rounded-md text-sm text-gray-500 bg-red-200 px-2"><span className="text-blue-700 font-bold"></span> {item.brand}</h3>
            </div>
          <p className="text-sm sm:text-[14px] md:text-[16px]  font-medium text-gray-500 font-sans">Price : Rs.{item.price}/-</p>
          <p className="text-sm sm:text-[14px] md:text-[15px]  font-normal text-gray-500 capitalize font-sans line-clamp-2">{item.desc}</p>
           <div className="flex flex-wrap items-center justify-start gap-2 my-1">
            {item.tags.map((x,index) => {
              
             const color = colors[index % colors.length];
             return (
              <div key={index} className="text-sm sm:text-[14px] md:text-[15px] border px-1 rounded-md  font-normal capitalize"
              style={{
                borderColor: color.border,
                color: color.text,
                backgroundColor: color.background,
              }}
              >
             {x.name}
              </div>
             )
            })}
          </div>
          <h6 className="text-sm sm:text-[14px] md:text-[15px]  font-normal text-gray-500 capitalize font-sans"> Ratings : <Rate disabled value={item.ratings} /> </h6>
          <ButtonRender item={item} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
