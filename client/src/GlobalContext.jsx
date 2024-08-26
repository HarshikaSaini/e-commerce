import { createContext, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import userApi from "./api/userApi";
import tagApi from "./api/tagApi";
import categoryApi from "./api/categoryApi";

import axios from "axios";
axios.defaults.withCredentials = true;

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState([100,50000]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    
  };
  const brands = [
    "Zara",
    "H&M",
    "Forever 21",
    "Anthropologie",
    "Banana Republic",
    "Topshop",
    "Levi’s",
    "Ralph Lauren",
    "Tommy Hilfiger",
    "Hugo Boss",
    "Calvin Klein",
    "Dockers",
    "Samsung",
    "Apple",
    "Sony",
    "LG",
    "Panasonic",
    "Dell",
  ];

  const refreshToken = async () => {
    const res = await axios.get("http://localhost:5000/user/refreshtoken", {
      withCredentials: true,
    });
    setToken(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  }, []);

  const updatedCategory = (category) => setSelectedCategory(category);
  const updatedPrice = (price) => {
    
    setSelectedPrice(price);
  };

  const updatedBrand = (brand) =>
    setSelectedBrand((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );

   
  const state = {
    token: [token, setToken],
    productApi: ProductApi(),
    userApi: userApi(token),
    categoryApi: categoryApi(),
    brands: brands,
    tagApi: tagApi(),
    showSidebar: showSidebar,
    toggleSidebar: toggleSidebar,
    selectedCategory: selectedCategory,
    updatedCategory: updatedCategory,
    selectedPrice: selectedPrice,
    updatedPrice: updatedPrice,
    selectedBrand: selectedBrand,
    updatedBrand: updatedBrand,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
