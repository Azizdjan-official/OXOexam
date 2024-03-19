import React from 'react'
import ArrowbackIcon from './../../icons/ArrowbackIcon';
import successRegistrationImage from "../../images/successRegistration.png"
import Button from './../../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const SuccessRegistration = () => {
    const navigate = useNavigate()
    const nav = ()=>{
        navigate("/");
    }
    const reg = ()=>{
        navigate("/login");
    }
  return (
    <div className='flex items-center justify-center h-[80vh]'>
    <div className='flex flex-col border p-5 shadow-xl rounded-lg  w-[30vw] gap-5 '>
        <span onClick={()=> reg()} className='cursor-pointer'><ArrowbackIcon/></span >
        <div className='flex items-center justify-center'><img src={successRegistrationImage} /></div>
        <div><p className='text-center font-[500] text-black text-sm'>Ma’lumotlaringiz muvaffaqiyatli qabul qilindi. Davom etish tugmasini bosing</p></div>
        <Button type="submit" onClick={()=> nav()} variant="black" className="w-full py-3 rounded-xl text-lg">Davom etish</Button>
    </div>
    </div>
  )
}

export default SuccessRegistration
