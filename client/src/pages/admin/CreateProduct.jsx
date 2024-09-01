import React, { useContext, useEffect, useState } from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar.jsx";
import { useForm } from "react-hook-form";
import { GlobalState } from "../../GlobalContext.jsx";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { message, Tag } from "antd";

const CreateProduct = () => {
  const state = useContext(GlobalState);
  const getProd  = state.productApi.getProducts;
  const [category] = state.categoryApi.category;
  const brandCollection = state.brands;
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  

  const [selectedImage, setSelectedImage] = useState([]);
  const [tag, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const ratings = [1,2,3,4,5]

 
 
  

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageArray = files.map((file) => {
      const url = URL.createObjectURL(file);
      console.log(file, url);
      return { file, url };
    });
    setSelectedImage((prevImage) => [...prevImage, ...imageArray]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImage((prevImages) => {
      const newImages = [...prevImages];
      URL.revokeObjectURL(newImages[index].url); // Revoke the object URL
      newImages.splice(index, 1);
      return newImages;
    });
  };
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      e.preventDefault();
      if(!tag.includes(inputValue.trim())  && inputValue.trim() !== "" ) {
        const newTag = [...tag , inputValue.trim()];
        setTags(newTag)
        setValue("tags",newTag)
      }
      setInputValue("")
    }
  }

  const handleClose = (removedTag) => {
   const newTags = tag.filter(tag => tag !== removedTag);
   setTags(newTags);
   setValue("tags", newTags)
  }

  const formSubmit = async (data) => {
    
    const formData = new FormData();
    for (const key in data) {
      if(key === 'tags' && Array.isArray(data[key])){
        formData.append(key , JSON.stringify(data[key]))
      }else {
        formData.append(key, data[key]);
      }
    }

    selectedImage.forEach((image, index) => {
      formData.append("images", image.file);
      formData.append(`url ${index}`, image.url);
    });


    formData.forEach((value , key) => {
    console.log(key , value)
    })

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        message.success("Product created successfully!");
        getProd();
      } else {
        message.warning(" Please check the details and try again!");
      }
    } catch (error) {
      console.log(error);
    }
    reset();
    setSelectedImage([]);
    setTags([]);
    setValue("tags",[]);
    
  };

  

  return (
    <div className="flex gap-x-2 w-full overflow-y-hidden h-screen">
      <div className="w-[25%]">
      <AdminSidebar /> 
      </div>
      <div className=" h-full flex flex-col w-full  p-3">
        <main className="overflow-y-auto  w-full h-full px-2 py-3 gap-y-6 pb-5 flex flex-col bg-blue-50 rounded-md border border-blue-200">
          <h1 className="font-semibold font-serif tracking-wider text-lg text-blue-600">
            Create Product{" "}
          </h1>

          <div className="flex flex-col w-full items-center justify-between">
            <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
              <div className="flex flex-col gap-y-5 w-full">
                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4 font-medium text-lg">
                    Product Name :
                  </label>
                  <input
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="text"
                    label="Product Name"
                    {...register("title", {
                      required: "Enter product name !",
                    })}
                  />
                  {errors.title && <p>{errors.title.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4 font-medium text-lg">
                    Product Price :
                  </label>
                  <input
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="number"
                    label="Product Price"
                    {...register("price", {
                      required: "Enter product price !",
                    })}
                  />
                  {errors.price && <p>{errors.price.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4 font-medium text-lg">
                    Discount Rate :
                  </label>
                  <input
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="number"
                    {...register("discountPer", {
                      required: "Enter discount rate% !",
                    })}
                  />
                  {errors.discountPer && <p>{errors.discountPer.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4 font-medium text-lg">
                    Description :
                  </label>
                  <input
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="text"
                    {...register("desc", {
                      required: "Enter product description !",
                    })}
                  />
                  {errors.desc && <p>{errors.desc.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label
                    htmlFor="brand"
                    className="w-full md:w-1/4 font-medium text-lg"
                  >
                    Select Category :
                  </label>
                  <select
                    className="capitalize w-2/3 md:w-1/3"
                    name="category"
                    {...register("category", {
                      required: "Enter product category !",
                    })}
                  >
                    {category.map((item) => (
                      <option key={item._id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p>{errors.category.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4 font-medium text-lg">
                    Select Brand :
                  </label>
                  <select
                    className="capitalize  w-2/3 md:w-1/3"
                    name="brand"
                    {...register("brand", {
                      required: "Enter product brand !",
                    })}
                  >
                    {brandCollection.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.brand && <p>{errors.brand.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4  font-medium text-lg">
                    Ratings  :
                  </label>
                 
                  <select
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="number"
                    {...register("ratings", {
                      required: "Enter product ratings !",
                    })}
                  >
                   {
                    ratings.map((item,index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                   }
                  </select>
                  
                  {errors.ratings && <p>{errors.ratings.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4  font-medium text-lg">
                    Total Sell Count :
                  </label>
                  <input
                    className="w-2/3 md:w-1/3 outline-none border-b-2  focus:border-blue-400"
                    type="text"
                    {...register("sold", {
                      required: "Enter no. of product sold !",
                    })}
                  />
                  {errors.sold && <p>{errors.sold.message}</p>}
                </div>

                <div className="px-3 flex flex-col md:flex-row md:flex md:items-center justify-start  gap-2">
                  <label className="w-full md:w-1/4  font-medium text-lg">
                    Images
                  </label>
                  <input
                    className="px-16 block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
                    type="file"
                    multiple
                    onChange={handleImageChange}
                  />
                </div>

                <div
                  className={`${
                    selectedImage.length <= 3 ? "md:h-[300]" : "md:h-[600px]"
                  }   mt-4 overflow-y-auto overflow-hidden flex flex-col items-center justify-center gap-y-10 md:grid md:grid-cols-3 md:gap-2  w-full `}
                >
                  {selectedImage.map((image, index) => (
                    <div className="relative w-full h-80" key={index}>
                      <RxCross2
                        onClick={() => handleRemoveImage(index)}
                        className="w-4 h-4  md:h-6 md:w-6
                absolute top-2 left-2 border border-gray-400 text-white bg-black bg-opacity-50 mix-blend-difference rounded-full px-1"
                      />
                      <img
                        src={image.url}
                        alt={`Selected image at ${index + 1}`}
                        className="object-cover h-80 w-full rounded-md "
                      />
                    </div>
                  ))}
                </div>

                <div className="px-3 flex flex-col md:flex-row  md:items-start justify-start  gap-2">
                  <label className="w-full md:w-1/4  font-medium text-lg">
                    Create Tags :
                  </label>

                  <div className="flex flex-col w-2/3 md:w-1/3 ">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="outline-none   border-b-2  focus:border-blue-400"
                    />
                    
                      <div className= {`${tag.length < 1 ? "hidden": ""} mt-2 md:mt-5 w-full h-auto bg-gray-200 p-2 flex flex-row flex-wrap gap-2 items-center rounded-md border border-gray-300`}>
                      {tag.map((tags, index) => (
                        <Tag key={index} closable onClose={() => handleClose(tags)}>
                         <span className="capitalize font-medium text-md">{tags}</span>
                        </Tag>
                      ))}
                      </div> 
                      <input
                      type="hidden"
                      {...register("tags", { required: "Enter Tags!" })}
                      />

                  </div>
                  {errors.tags && <p>{errors.tags.message}</p>}
                  
                </div>
               
                

                <button
                  className="max-w-max m-auto rounded-full px-4 py-1  bg-blue-800 text-white hover:bg-blue-700"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateProduct;
