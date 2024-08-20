import axios from 'axios';
import {useState,useEffect} from 'react'

const tagApi = () => {
 const [tags , setTags] = useState([]);

 const getTags = async() => {
    try {
        const response = await axios.get("http://localhost:5000/api/tag");
        setTags(response.data)
        
    } catch (error) {
        console.log("error in fetching tags")
    }
 }

 useEffect(()=>{
    getTags()
 },[])


  return {
    tags:[tags , setTags],
  }
}

export default tagApi