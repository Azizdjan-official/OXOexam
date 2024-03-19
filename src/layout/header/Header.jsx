import React from 'react'
import HeaderLogo from '../../icons/HeaderLogo'
import ChatIcon from './../../icons/ChatIcon';
import Likeheaderbutton from './../../icons/Likeheaderbutton';
import Userheaderlogo from './../../icons/Userheaderlogo';
import Button from './../../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { loadState } from '../../storage/storage';

const Header = () => {
  const {value, count} = useSelector(state=> state.wishlist)

  const navigate = useNavigate();
  

  const nav = ()=>{
    navigate("/profile")
  }

  return (
    <div className='bg-white py-4'>
      <div className='flex w-[80%] mx-auto items-center justify-between '>
        <Link to="/"><HeaderLogo/></Link>
        <div className='flex gap-5 items-center'>
            <span className='flex gap-2 items-center  cursor-pointer'>
                <ChatIcon/>
                <p className='m-0'>Xabarlar</p>
            </span>
            <span className='flex gap-2 items-center cursor-pointer relative'>
                <span className='absolute -top-3 bg-red-400 left-2  h-[25px] w-[25px] rounded-full border px-2'>{count}</span>
                <Likeheaderbutton/>
                <p className='m-0'>Yoqtirganlar</p>
            </span>
            <span onClick={()=> nav()} className='flex gap-2 items-center cursor-pointer'>
                <Userheaderlogo/>
                <p className='m-0'>Akkaunt</p>
            </span>
            <span className='flex gap-2 items-center cursor-pointer'>
                <p className='m-0'>Uz</p>
                
            </span>
            <Button onClick={() => navigate("/create-product")} variant="black" className="rounded-[8px] px-4 py-2">E'lonlarni joylashtirish</Button>
        </div>
      </div>
      
    </div>
  )
}

export default Header
