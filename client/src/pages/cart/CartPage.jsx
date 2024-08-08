import React, { useContext } from "react";
import { GlobalState } from "../../GlobalContext";
import { Link } from "react-router-dom";
const CartPage = () => {
  const state = useContext(GlobalState);
  const [cart] = state.userApi.cart;
  console.log(cart.products)
  return (
    <div>
      {cart.length > 0 ? (
        <div className="py-2 flex justify-start px-4">
          {cart.map((item) => (
            <div className="w-1/2 h-full flex items-center justify-center gap-x-3  rounded-md py-2 border border-gray-400">
               <div className="w-[200px] h-1/2 ">
                <img
                  className="w-[200px] h-[200px]"
                  src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw59e0de74/images/ss21/chi16897ss21mint-1.jpg?sw=502&sh=753"
                  alt=""
                />
              </div> 

              <div className="flex flex-col gap-y-2 py-4">
                <h1 className="font-bold text-xl capitalize text-gray-700">
                  {item.title}
                </h1>
                <p className="font-normal text-lg text-gray-600">
                  Price - Rs.{item.price}/-
                </p>
                <p className="font-normal text-lg text-gray-600">
                  Description - {item.desc}
                </p>
                <p className="font-normal text-lg text-gray-600">
                  Items Sold - {item.sold}
                </p>
                <button className="border px-1 py-1 bg-blue-900 text-white rounded-xl">
                  <Link to={`/detail/${item._id}`}>View Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold flex items-center ">CART IS EMPTY!!</h1>
        </div>
      )}
    </div>
  );
};

export default CartPage;
