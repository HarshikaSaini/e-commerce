import React from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar.jsx";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const formSubmit =()=>{

}

  return (
    <div className="flex gap-x-2 w-full overflow-y-hidden h-full">
      <AdminSidebar />
      <div className=" h-full flex flex-col w-full overflow-y-auto p-3">
        <main className="w-full h-full px-2 py-3 gap-y-6 pb-5 flex flex-col bg-blue-50 rounded-md border border-blue-200">
          <h1 className="font-semibold font-serif tracking-wider text-lg text-blue-600">
            Create Product{" "}
          </h1>
         
          <div className="flex w-full items-center justify-between">
            <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
             <div className="flex flex-col gap-y-3 w-full">
              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Product Name :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  label="Product Name"
                  {...register("title", {
                    required: "Enter product name !",
                  })}
                />
                {errors.title && <p>{errors.title.message}</p>}
              </div>
              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Product Price :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="number"
                  label="Product Price"
                  {...register("price", {
                    required: "Enter product price !",
                  })}
                />
                {errors.price && <p>{errors.price.message}</p>}
              </div>
              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Discount Rate :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="number"
                  {...register("discountPer", {
                    required: "Enter discount rate% !",
                  })}
                />
                {errors.discountPer && <p>{errors.discountPer.message}</p>}
              </div>

              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Description :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  {...register("desc", {
                    required: "Enter product description !",
                  })}
                />
                {errors.desc && <p>{errors.desc.message}</p>}
              </div>

              <div className="px-3 flex items-center justify-start gap-3">
                <label htmlFor="brand" className="font-medium text-lg">Select Brand :</label>
                 <select name="brand" {...register("brand", {
                    required: "Enter product brand !",
                  })}>
                     <option value=""></option> 
                     <option value=""></option> 
                     <option value=""></option> 

                 </select>
              
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  
                />
                {errors.brand && <p>{errors.brand.message}</p>}
              </div>

              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Category :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  {...register("category", {
                    required: "Enter product category !",
                  })}
                />
                {errors.category && <p>{errors.category.message}</p>}
              </div>


              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Ratings :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  {...register("ratings", {
                    required: "Enter product ratings !",
                  })}
                />
                {errors.ratings && <p>{errors.ratings.message}</p>}
              </div>


              <div className="px-3 flex items-center justify-start gap-3">
                <label className="font-medium text-lg">Total Sell Count :</label>
                <input
                  className="w-1/3 outline-none border-b-2  focus:border-blue-400"
                  type="text"
                  {...register("sold", {
                    required: "Enter no. of product sold !",
                  })}
                />
                {errors.sold && <p>{errors.sold.message}</p>}
              </div>


             </div>
            </form>
            <div></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateProduct;
