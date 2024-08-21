import axios from 'axios';
import {  useEffect, useState } from 'react'


const userApi = (token) => {
    const [isLogged , setIsLogged] = useState(false);
    const [isadmin , setIsAdmin] = useState(false);
    const [cart , setCart] = useState([])
    const [userData , setUserData] = useState([])

    useEffect(()=>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get("http://localhost:5000/user/infor", {
                        headers:{Authorization:token}
                    })
                    setIsLogged(true);
                   
                   setUserData(res.data)
                    if(res.data.role === "admin") {
                        setIsAdmin(true);
                    }
                } catch (error) {
                    alert(error.response.data.msg)
                }
            }

            getUser()
        }
    },[token])


    const addCart = async(product) =>{
         if(!isLogged) return alert("Please login to your account ")
    

   const check = cart.every((item) => 
      item._id !== product._id)
    
       if(check) setCart([...cart , {...product,quantity:1}]);
       else  alert("This product is already in cart")
       }
    
      


  return {
    isLogged: [isLogged , setIsLogged],
    isadmin : [isadmin , setIsAdmin],
    userData:userData,
    addCart:addCart,
    cart:[cart,setCart]

  }
}

export default userApi