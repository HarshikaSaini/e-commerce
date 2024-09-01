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
  const [selectedPrice, setSelectedPrice] = useState([100, 100000]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [search, setSearch] = useState("") 
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedTag, setSelectedTag] = useState([]);
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
    "OnePlus",
    "Moto",
    "Vivo",
    "Dell",
    "HP",
    "Lenovo"
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

  const updatedRatings = (rating) => setSelectedRating(rating);
  
  const updatedTag = (tag) =>
    setSelectedTag((prevTag) =>
      prevTag.includes(tag)
        ? prevTag.filter((item) => item !== tag)
        : [...prevTag, tag]
    );
    

  const updatedBrand = (brand) =>
    setSelectedBrand((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );

  const searchbarData = (term) => setSearch(term)  
 
 
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
    selectedRating: selectedRating,
    updatedRatings: updatedRatings,
    selectedTag: selectedTag,
    updatedTag: updatedTag,
    searchbarData:searchbarData,
    search:search
  };

  return <GlobalState.Provider value={state}>
       {children}
    </GlobalState.Provider>;
};
