import React,{forwardRef} from 'react'

const Input = forwardRef(({label,placeholder ,type, ...props},ref) => {
  
  return (
    <div className={`${type === "radio" ? "flex items-center justify-start gap-x-5 w-full md:w-1/2 lg:w-1/4 md:m-auto":
    "flex flex-col w-full  md:flex-row md:items-center md:justify-between  md:w-1/2 lg:w-1/4 md:m-auto" }  `}>
      {label && <label className='text-lg font-serif font-semibold text-gray-600'>{label} :</label>}  
    <input 
    ref={ref}
    type={type}
    placeholder={placeholder}
    className='px-2 rounded-md'
    {...props} />
    </div>
  )
})

export default Input