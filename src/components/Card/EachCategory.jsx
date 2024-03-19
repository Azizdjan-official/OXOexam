import React from 'react'
import { Link } from 'react-router-dom'

const EachCategory = ({img,name,datakey}) => {
    
    
  return (
    <Link to={`/all/${datakey}`}>
        <div className='flex cursor-pointer flex-col gap-2'>
            <img className='w-[84px] h-[84px] rounded-full' src={img}/>
            <h1 className='text-[#131418] font-[400] text-sm'>{name}</h1>
        </div>
    </Link>
  )
}

export default EachCategory
