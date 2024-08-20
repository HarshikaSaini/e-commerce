import {useState,useEffect} from 'react'
import axios from 'axios';
const categoryApi = () => {
  const [category,setCategory] = useState([]);  
  
  useEffect(()=>{
    const getCategories = async()=>{
      try {
        const response = await axios.get("http://localhost:5000/api/category")
         setCategory(response.data)
      } catch (error) {
        console.log("Error in fetching the data from category api",error)
      }
    }
    getCategories()
  },[])
   
  return {
    category:[category,setCategory]
  }
}

export default categoryApi