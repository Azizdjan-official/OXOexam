import { useParams } from 'react-router-dom';
import { useGetProductDetail } from './service/query/useGetProductDetail';
import Location from './../../icons/Location';
import locImage from '../../images/location.png'
import advertisement from '../../images/advertisement.png'
import Likeheaderbutton from './../../icons/Likeheaderbutton';
import EyeIcon from './../../icons/EyeIcon';
import Flagicon from './../../icons/Flagicon';
import Button from '../../components/UI/Button';
import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST } from '../../redux/reducer/Wishlist';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Unlikeicon from './../../icons/Unlikeicon';
import { useGetAllData } from './../Home/service/query/useGetAllData';
import SingleCard from './../../components/Card/SingleCard';

const ProductDetail = () => {
    const { id } = useParams();
    const {data} = useGetProductDetail(id);
    const dispatch = useDispatch()
    const {data:alldata} = useGetAllData();
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
    <div>
      <div className='flex my-8 justify-between '>
        <div className='w-[55%]  border p-3 shadow-md rounded-md'>
          <img src={data?.img} className='object-scale-down w-full h-[400px]'/>
        </div>
        <div className='flex flex-col gap-3 border w-[40%] p-5'>
            <div className='rounded-md shadow-md p-3 border'>
                <p className='font-bold text-2xl'>{data?.firstName}</p>
                <p className='font-bold text-xl'>{data?.phoneNumber}</p>
                <p className='font-bold text-xl capitalize'>{data?.title}</p>
                {/* <p className='font-bold text-xl'>{data?.price} $</p> */}
            </div>
            <div className='rounded-md p-3 border shadow-md flex flex-col gap-3'>
                <div className='flex gap-2'>
                  <Location/>
                  <p className='font-bold text-xl'>{data?.location}</p>
                </div>
                <div className='w-full border'>
                  <img className='w-full' src={locImage} />
                </div>
            </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[55%] '>
          <div className='w-full  shadow-md border rounded-md p-4'>
              <div className='flex justify-between'>
                <p>Joylashtirildi bugun 21:22</p>
                <div onClick={handleClick}>
                {liked ? <Button  onClick={removewishlist}><Unlikeicon /></Button> : 
                <Button  onClick={addtowishlist}><Likeheaderbutton /></Button>}
                </div>
              </div>
              <p className='font-bold text-xl capitalize'>{data?.title}</p>
              <p className='text-red-600 font-bold text-xl capitalize'>{data?.price} $</p>
              <p>Tavsifi</p>
              <p className='font-[400] text-sm '>Assalomu Alaykum.
                Elonni Oxirigacha O'qing...
                PlayStation 4 ga + 100% ORIGINAL Joystick. ( Yengi + B/u ) lariyam Bor.Narxi Xar Xil. ORIGINAL.
                Qora Rangi.. 45$.. dan. Svetnoy.. 55$.. dan.
                Xammasi IDEALni.. IDEAL..lari. KOREAdan Kegan. ORIGINAL 100% ORIGINAL.
                Bemalol Tekshirib Beriladi.</p>
                <hr />
                <div className='flex justify-between'>
                    <span>ID: {data?.id}</span>
                    <span className='flex items-center gap-2'><EyeIcon/> Ko‘rishlar: 137</span>
                    <span className='text-red-500 flex items-center gap-2'><Flagicon/> Shikoyat qilish</span>
                </div>
          </div>
          <div className='shadow-md border rounded-md p-4'>
            <h1>{data?.firstName}</h1>
            <p className='text-gray'>Online</p>
            <textarea className='h-[40vh] p-2 w-full bg-[#F2F4F5] placeholder:text-[#464646] ' placeholder='Xabaringgizni yozing...'></textarea>
            <div className='flex justify-between my-2'>
              <input type="file" placeholder='Fayl biriktirish' />
              <Button variant="black" className="px-4 rounded-md py-2">Yuborish</Button>
            </div>
          </div>
        </div>
        <div className='w-[40%] h-[114vh] flex justify-center border shadow-md rounded-md p-3'>
          <img src={advertisement} />
        </div>
      </div>
      <h1 className='text-black px-3 my-3 text-2xl'>Muallifning boshqa e’lonlari</h1>
      <div className='p-2 grid grid-cols-5 gap-4'>
          {alldata?.pages[0].map((singlecard)=> <SingleCard key={singlecard.id} {...singlecard}/>)}
        </div>

    </div>
  )
}

export default ProductDetail
