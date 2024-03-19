import React from 'react'
import LogoFooter from './../../icons/LogoFooter';
import AppStoreIcon from './../../icons/AppStoreIcon';
import PlayStoreIcon from './../../icons/PlayStoreIcon';

const Footer = () => {
  return (
    <div className='bg-[#19191C] py-10 flex flex-col'>
        <div className='w-[80%] mx-auto flex justify-between'>
            <div><LogoFooter/></div>
            <div className='flex flex-col gap-3'>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Mobil ilovalar</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Yordam</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Pullik xizmatlar</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>OXO da biznes</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Saytda reklama</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Foydalanish shartlari</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Maxfiylik siyosati</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Foydalanish shartlari</a>
            </div>
            <div className='flex flex-col gap-3'>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Qanday qilib sotish va sotib olish kerak?</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Xavfsizlik qoidalari</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Sayt xaritasi</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Mintaqalar xaritasi</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>OXO da karyera</a>
                <a href="#" className='text-[#FFFFFF] font-[500] text-sm'>Qayta aloqa</a>
            </div>
            <div className='flex flex-col gap-3'>
                <AppStoreIcon/>
                <PlayStoreIcon/>
            </div>
        </div>
        <div className='pt-10 w-[80%] mx-auto  '>
            <p className='text-[#FFFFFF] font-[500] text-md'>© 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz mumkin.</p>
        </div>
    </div>
  )
}

export default Footer
