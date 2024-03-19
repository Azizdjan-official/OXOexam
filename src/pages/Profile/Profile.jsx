import React, { useEffect } from 'react'
import { loadState } from '../../storage/storage'
import Facebook from './../../icons/Facebook';
import Youtubeicons from './../../icons/Youtubeicons';
import Tiktokicon from './../../icons/Tiktokicon';
import Telegramicon from './../../icons/Telegramicon';
import Instagram from './../../icons/Instagram';
import Button from '../../components/UI/Button';
import TabContainer from '../../components/Tab/Tab';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    
const navigate = useNavigate();
  const tokenUser = loadState('user');
  useEffect(()=>{
    if(!tokenUser){
        navigate("/login")
    }
  },[])
  return (
    <div>
      <div className="bgImage h-[40vh] border bg-blue-300"></div>
      <div className="profileInfo  -mt-16">
        <div className='border ml-24 shadow-md rounded-lg p-3  w-[40%] flex items-center px-4 gap-3'>
            <div><img src=""  className='w-[200px] h-[200px] border-5 border-black rounded-full'  /></div>
            <div className='bg-transparent'>
                <h1>{tokenUser?.user?.name}</h1>
                <div className='flex gap-3 justify-evenly'>
                    <Facebook/>
                    <Youtubeicons/>
                    <Tiktokicon/>
                    <Telegramicon/>
                    <Instagram/>
                </div>
            </div>
        </div>
      </div>
      <div className='w-[87%] mx-auto flex justify-between my-8'>
        <h1>Xabarlar</h1>
        <div className='flex gap-4 items-center'>
            <span className='flex flex-col items-center'>
                <p className='m-0 text-sm'>Sizning hisobingiz:   0  so’m</p>
                <p className='m-0 text-sm'>Mavjud bonuslar:   0 so’m</p>
            </span>
            <Button className="border border-black rounded-md px-4 py-2">Hamyonni to’ldirish</Button>
            <Button variant='black' className="border border-black rounded-md px-4 py-2">Paket sotib olish</Button>
        </div>
      </div>
      <div><TabContainer/></div>
    </div>
  )
}

export default Profile
