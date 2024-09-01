import  { useEffect, useState } from 'react'
import axios from "axios";

const ProductApi = () => {

    const [products,setProducts] = useState([])
    
    const getProducts = async () => {
        const res = await axios.get("https://e-commerce-qpda.onrender.com/api/products")
        setProducts(res.data);
       
        
    }
    
      

    useEffect(()=>{
     getProducts()
     
    },[]);
      
  
  
  return {
    products : [products,setProducts],
    getProducts
  }
}

export default ProductApi