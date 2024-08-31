import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalContext";
import { useParams, Link } from "react-router-dom";
import tag from "../../assets/tag.jpg";
const ProductDetail = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productApi.products;
  const addCart = state.userApi.addCart;

  const [selectedImg, setSelectedImg] = useState("");
  

  const colors = [
    { border: "#f56969", text: "#f56969", background: "#fff0f0" },
   
    { border: "#71ad7d", text: "#71ad7d", background: "#e6f7e9" },
    { border: "#00487d", text: "#00487d", background: "#dcf0fc" },
    { border: "#da6ff7", text: "#da6ff7", background: "#f4e9f7 " },
    { border: "#ff9400", text: "#ff9400", background: "#fff1bf " },
    { border: "#002db3", text: "#002db3", background: "#dcf0fc" },
  ];

  useEffect(() => {
    if (params) {
      products.forEach((element) => {
        if (element._id === params.id) {
          setDetails(element);
        }
      });
    }
  }, [params, products]);

  useEffect(() => {
    if (details.images && details.images.length > 0) {
      setSelectedImg(details.images[0].url);
    }
  }, [details]);

  if (!details || details.length === 0) return null;

  const handleAddtocart = () => {
    addCart(details);
  };

  const handleImageClick = (src) => {
    setSelectedImg(src);
    
  };

  
  

  return (
    <div className="w-full overflow-hidden h-screen p-3">
      <div className="flex flex-col  rounded-md lg:flex-row lg:gap-x-5 lg:justify-start overflow-y-auto  w-full  h-full   ">
        {/* Display selected image */}
        <div className="flex flex-col items-center gap-y-3 h-full w-full md:m-auto md:h-[99%] md:w-[90%] lg:m-2 lg:h-[99%] lg:w-[60%]">
          <div className="relative h-full w-full overflow-hidden border-2 rounded-md shadow-lg ">
            {selectedImg && (
              <img
               
                src={selectedImg}
                alt="Selected"
                className="absolute object-fill h-full w-full left-0 top-0"
              />
            )}
          </div>

          <div className="flex gap-x-2 items-center">
            {details.images.map((x, index) => (
              <div
                key={index}
                className="w-16 h-16 relative overflow-hidden rounded-full"
              >
                <img
                  src={x.url}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(x.url)}
                  className="absolute top-0 left-0 cursor-pointer object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-1 md:gap-y-1 py-2  lg:gap-y-4   lg:py-10 ">
          <h1 className=" text-xs md:text-sm lg:text-lg  font-normal capitalize">
            <span className="font-semibold  text-sm md:text-lg lg:text-xl">Name : </span>
            {details.title}
          </h1>
          <h1 className="font-normal text-xs md:text-sm lg:text-lg  ">
            <span className=" font-semibold text-sm md:text-lg lg:text-xl">Price : ₹</span> {" "}
            {details.price}/-
          </h1>
          <h1 className="font-normal text-xs md:text-sm lg:text-lg  capitalize ">
            <span className=" font-semibold text-sm md:text-lg lg:text-xl">Product by :</span>{" "}
            {details.brand}
          </h1>
          <h1 className="font-normal text-xs md:text-sm lg:text-lg  capitalize ">
            <span className=" font-semibold text-sm md:text-lg lg:text-xl">Description :</span>{" "}
            {details.desc}
          </h1>
          <h1 className="font-normal text-xs md:text-sm lg:text-lg  capitalize ">
            <span className=" font-semibold text-sm md:text-lg lg:text-xl">Selling Count :</span>{" "}
            {details.sold}
          </h1>
          <h1 className="font-normal  text-xs md:text-sm lg:text-lg  capitalize ">
             <span className=" font-semibold text-sm md:text-lg lg:text-xl">Heads :</span> 

            {details.tags.map((x, index) => {
              const color = colors[index % colors.length];
              return (
                <div className="flex items-center gap-2 px-2">
                  <img src={tag} className="w-5" />
                  <p
                    key={index}
                    className="capitalize"
                    style={{
                      color: color.text,
                    }}
                  >
                    {x.name}
                  </p>
                </div>
              );
            })}
          </h1>

          <div className="flex flex-col gap-y-1 lg:gap-y-2">
            <h1 className="font-semibold text-sm md:text-sm lg:text-lg ">Deal of the day:</h1>
            <ul className="list-disc px-8">
              <li className="font-normal  text-sm md:text-lg lg:text-xl capitalize ">
                <span className="text-gray-500 line-through"> ₹ {(details.price + ((details.discountPer/100) * details.price))}</span> 
                <span className="text-green-600 font-bold"> {details.discountPer}% Off</span> 
              </li>
              <li className="font-normal  text-sm md:text-lg lg:text-xl">Free Delivery</li>
              <li className="font-normal  text-sm md:text-lg lg:text-xl"> <span className="text-green-600 font-bold">Save extra with combo offer</span></li>
              <li className="font-normal  text-sm md:text-lg lg:text-xl">Upto 20% Off on Exchange Offer</li>
              <li className="font-normal  text-sm md:text-lg lg:text-xl">Free vouchers on shopping with Axis Bank , ICICI , HDFC and many more.</li>
            </ul>
          </div>

          <button
            onClick={handleAddtocart}
            className="border px-1 py-1 w-1/4 m-auto bg-blue-900 text-white rounded-xl"
          >
            <Link to="/cart">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
