import React from 'react'
import { Link } from 'react-router-dom'
import Likeheaderbutton from './../../icons/Likeheaderbutton';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST } from '../../redux/reducer/Wishlist';
import Unlikeicon from './../../icons/Unlikeicon';
import Button from './../UI/Button';
import { useState } from 'react';

const SingleCard = ({img,title,price,location,id,datakey}) => {
  const dispatch = useDispatch()
  // const {value, count} = useSelector(state=> state.wishlist)
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  const addtowishlist = ()=>{
    dispatch(ADD_TO_WISHLIST({img,title,price,location,id,datakey}))
  }
  const removewishlist = ()=>{
    dispatch(REMOVE_TO_WISHLIST({img,title,price,location,id,datakey}))
  }
  return (
    <div className='shadow-md border p-2 rounded-md flex flex-col items-center gap-3 relative'>
      <Link to={`/product-detail/${datakey}/${id}`} >
        <div className=' h-[200px]'><img className='object-scale-down w-full h-full' src={img} /></div>
        <p className='text-black w-full text-center  capitalize'>{title}</p>
        <p className='text-black font-bold text-center'>{price} $</p>
        <p className='text-black text-center'>{location}</p>
    </Link>
    <div onClick={handleClick}>
    {liked ? <Button className='absolute top-3 right-2 ' onClick={removewishlist}><Unlikeicon /></Button> : 
    <Button className='absolute top-3 right-2 ' onClick={addtowishlist}><Likeheaderbutton /></Button>}
    </div>
 
 
      

    </div>
  )
}

export default SingleCard
