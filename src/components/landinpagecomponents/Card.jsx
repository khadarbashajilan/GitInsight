
import React from 'react'

const Card = ({img,heading,para}) => {
  return (
    <>
    <div className='flex flex-col border-2 rounded-2xl p-2 m-0 gap-1 w-50 md:w-75 md:h-60  md:p-3 items-center justify-center'>
        <img className='rounded-4xl m-2 border-2 w-10 sm:w-15 border-transparent p-1 self-center bg-white ' height={"25px"} width={"25px"} src={img} />
        <h1 className='text-md  md:text-xl'>{heading}</h1>
        <p className='text-sm md:text-md'>{para}</p>
    </div>
    </>
  )
}


export default Card
