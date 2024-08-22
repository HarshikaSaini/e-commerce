import { createContext, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import userApi from "./api/userApi";
import tagApi from "./api/tagApi"
import categoryApi from "./api/categoryApi";

import axios from "axios";
axios.defaults.withCredentials = true;

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [showSidebar , setShowSidebar] = useState(false);

  const toggleSidebar = () => {

    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  const brands = ["Zara","H&M","Forever 21","Anthropologie","Banana Republic","Topshop","Levi’s","Ralph Lauren",
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

  const state = {
    token: [token, setToken],
    productApi: ProductApi(),
    userApi: userApi(token),
    categoryApi: categoryApi(),
    brands:brands,
    tagApi : tagApi(),
    showSidebar:showSidebar,
    toggleSidebar:toggleSidebar
  };

  

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
