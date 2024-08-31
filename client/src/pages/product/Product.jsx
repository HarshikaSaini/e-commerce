import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalContext";
import ProductList from "./ProductList";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import UserSidebar from "../../components/sidebar/UserSidebar";


const Product = () => {
  const state = useContext(GlobalState);
  const isadmin = state.userApi.isadmin[0];
  const productsList = state.productApi.products[0];
  const showSidebar = state.showSidebar;
  const selectedCategory = state.selectedCategory;
  const selectedPrice = state.selectedPrice;
  const selectedBrand = state.selectedBrand;
  const selectedRating = state.selectedRating;
  const selectedTag = state.selectedTag;

  
 console.log(productsList);
 
  // const filteredData = productsList.filter((x) => {

  //   const matchesBrand = selectedBrand.length > 0 ? selectedBrand.includes(x.brand) : true;
  //   const matchesCategory = selectedCategory !== "all" ? selectedCategory === x.category.name : true;
  //   const matchesPrice = ((selectedPrice <= selectedPrice[0]) && (selectedPrice >= selectedPrice[1])) ?   selectedPrice === x.price : true;
  //   const matchesRating = selectedRating ? x.ratings === selectedRating : true;

  //   const matchesTag = selectedTag.length > 0 ?  selectedTag.includes(x.tags.name)  : true;
   
  //   console.log(matchesBrand,matchesCategory,matchesPrice,matchesRating,matchesTag);
  //   return matchesBrand && matchesCategory && matchesPrice && matchesRating && matchesTag;
  // });


  const filteredData = productsList.filter((x) => {
    const matchesBrand = selectedBrand.length > 0 ? selectedBrand.includes(x.brand) : true;
    const matchesCategory = selectedCategory !== 'all' ? selectedCategory === x.category.names : true;
    const matchesPrice = selectedPrice.length === 2 ? (x.price >= selectedPrice[0] && x.price <= selectedPrice[1]) : true;
    const matchesRating = selectedRating ? x.ratings === selectedRating : true;
    const matchesTag = selectedTag.length > 0 ? x.tags.some(tag => selectedTag.includes(tag.name)) : true;

    return matchesBrand && matchesCategory && matchesPrice && matchesRating && matchesTag;
});
  

  return (
    <div className="flex gap-x-2 w-full overflow-y-hidden h-screen">
      <div
        className={`${
          showSidebar
            ? "w-[80%] md:w-[50%] lg:w-[25%]"
            : "hidden lg:flex lg:w-[25%]"
        } h-full z-10 shadow-sm bg-white flex-shrink-0 fixed lg:relative`}
      >
        {isadmin ? <AdminSidebar /> : <UserSidebar />}
      </div>

      <div className=" h-full flex flex-col w-full  p-3">
        <main className="overflow-y-auto  w-full h-full px-2 py-3 gap-y-6 pb-5 flex flex-col bg-blue-50 rounded-md border border-blue-200">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 p-3">
            {filteredData.length === 0
              ? productsList.map((item,index) => {
                  return (
                    <ProductList key={index} item={item} isadmin={isadmin} />
                  );
                }) 
              :
              filteredData.map((item,index) => {
                  return (
                    <ProductList key={index} item={item} isadmin={isadmin} />
                  );
                })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;
