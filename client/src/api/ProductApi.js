import  { useEffect, useState } from 'react'
import axios from "axios";

const ProductApi = () => {

    const [products,setProducts] = useState([])
    
    const getProducts = async () => {
        const res = await axios.get("http://localhost:5000/api/products")
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