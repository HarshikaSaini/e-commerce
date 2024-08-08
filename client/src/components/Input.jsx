import React,{forwardRef} from 'react'

const Input = forwardRef(({label,placeholder , ...props},ref) => {
  return (
    <div className='flex flex-col w-full md:w-1/2 md:m-auto'>
      {label && <label className='text-lg font-serif font-semibold text-gray-600'>{label} :</label>}  
    <input 
    ref={ref}
    placeholder={placeholder}
    className=' px-2 rounded-md'
    {...props} />
    </div>
  )
})

export default Input