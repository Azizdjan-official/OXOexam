
import { useState } from 'react';
import { useGetCategories } from './../Home/service/query/useGetCategories';
import { usePostProduct } from './service/mutation/usePostProduct';
import { useForm } from 'react-hook-form';
import Button from './../../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { loadState } from './../../storage/storage';
import { useEffect } from 'react';

export const CreateProduct = () => {
  const { data} = useGetCategories();
  const [state, setState] = useState("");
  const { mutate } = usePostProduct(state);
  const { register, handleSubmit, reset } = useForm();

  const onchangeVal = (e) => {
    setState(e.target.value);
  };
  const navigate = useNavigate();
  const tokenUser = loadState('user');
  useEffect(()=>{
    if(!tokenUser){
        navigate("/login")
    }
  },[])
  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        reset();
      },
    });
  };
  return (
    <div className="container bg-[#F6F6F6] ">

      <h1 className="w-[80%] mx-auto font-bold py-6 text-2xl">E'lon berish</h1>
      <form className=' w-[80%] mx-auto p-2 ' onSubmit={handleSubmit(submit)}>
        <div className="shadow-md p-5 rounded-md bg-white">
          <h1 className='text-[#222222] w-[60%] my-4 font-[700] text-xl'>Bizga e’loningiz haqida gapirib bering</h1>

          <div className='w-[60%]'>
            <label htmlFor="theme" className="text-[#979C9E]  font-[400] text-md">Sarlavha kiriting</label>
            <input
              id="theme"
              className='bg-[#E7E7E7] my-2 w-full rounded-md py-2 px-4 placeholder:text-[#979C9E]'
              type="text"
              {...register("title", { required: true })}
            />
          </div>

          <div className="w-[60%]">
            <label htmlFor="category" className="text-[#979C9E] font-[400] text-md">
              Rukn
            </label>
            <select
              {...register("datakey")}
              onChange={onchangeVal}
              className="w-full mt-2  text-[#979C9E] px-4 py-2 rounded-md bg-[#E7E7E7] border-0 outline-none"
              id="category"
            >
              {data?.map((categories) => (
                <option  className='text-black' key={categories.id} value={categories.datakey}>
                  {categories.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="shadow-md p-5 my-5 rounded-md bg-white">
          <h1 className="text-[#222222] w-[60%] my-4 font-[700] text-xl">
            Bizga e’loningiz haqida gapirib bering
          </h1>
          <p className="text-[#979C9E] w-[60%] font-[400] text-xs my-3">
            Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini
            ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.
          </p>
          <input
            className="text-[#979C9E] w-[60%] px-4 py-2 rounded-md bg-[#E7E7E7]  outline-none"
            placeholder="htttps://"
            type="text"
            {...register("img", { required: true })}
          />
        </div>
        <div className="bg-white rounded-md shadow-md p-5 my-4">
            <h1 className=''>Tavsif</h1>
          <textarea className="border w-[60%] h-[40vh] text-[#979C9E] px-4 py-2 rounded-md bg-[#E7E7E7] ' placeholder='E’lon haqida batafsil"
            {...register("description", { required: true })} placeholder='E’lon haqida batafsil'></textarea>
          
        </div>
        <div className="bg-white shadow-md p-5 my-10 rounded-md flex flex-col gap-2 border ">
          <div className='flex gap-3 '>
            <Button className="px-4 py-1 rounded-lg" variant="black">Narxli</Button>
            <Button className="px-4 py-1 rounded-lg bg-[#E7E7E7]">Bepul</Button>
            <Button className="px-4 py-1 rounded-lg bg-[#E7E7E7]">Ayirboshlash</Button>
          </div>
          <h1 className="text-[#979C9E] text-lg">Narx</h1>
          <div className='flex gap-3'>
            <input className="outline-none border border-[#b0b0b0] bg-[#E7E7E7] rounded-md py-2 px-4" type="number" {...register("price", { required: true })} />
            <input type="text" placeholder="So'm" className='border border-[#b0b0b0] w-28 bg-[#E7E7E7] rounded-md py-2 px-2 outline-none' />
          </div>
          <h1 className="text-[#222222] text-xl ">Savdolashish</h1>
          <h1 className="text-[#979C9E] mt-4 text-lg">Xususiy yoki biznes</h1>
          <div className='flex gap-3'>
            <Button className="px-6 py-2 text-black font-bold rounded-lg bg-[#E7E7E7]">Jismoniy shaxs</Button>
            <Button className="px-6 py-2 text-black font-bold rounded-lg bg-[#E7E7E7]">Biznes</Button>
          </div>

        </div>
        <div className="bg-white shadow-md p-5  mt-10 rounded-md">
          <h1 className="text-xl ">Siz bilan bog’lanish uchun</h1>
          <div className='w-[60%]'>
            <label htmlFor="location" className="text-[#979C9E]">
              Joylashuv
            </label>
            <input className="outline-none border border-[#b0b0b0] bg-[#E7E7E7] w-full mt-2  rounded-md p-2 "
              {...register("location")}
              type="text"
              id="location"
              placeholder="Toshkent, Bektemir tumani"
            />
          </div>
          <div className="my-3 w-[60%]">
            <label htmlFor="name" className="text-gray">
              Ism
            </label>
            <input
              className="outline-none border border-[#b0b0b0] bg-[#E7E7E7] w-full mt-2  rounded-md p-2 "
              {...register("firstName")}
              type="text"
              id="name"
            />
          </div>
          <div className="my-3 w-[60%]">
            <label htmlFor="email" className="text-gray">
              Email-manzil
            </label>
            <input
              className="outline-none border border-[#b0b0b0] w-full mt-2 bg-[#E7E7E7]  rounded-md p-2"
              {...register("email")}
              type="email"
              id="email"
            />
          </div>
          <div className="my-3 w-[60%]">
            <label htmlFor="phone" className="text-gray">
              Telefon raqami
            </label>
            <input
              className="outline-none border border-[#b0b0b0] w-full mt-2 bg-[#E7E7E7] rounded-md p-2"
              {...register("phoneNumber")}
              type="tel"
              id="phone"
              placeholder='+998'
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 my-5">
          <Button variant="black" className="w-[20vw] py-3 rounded-[8px]">E'lon joylash</Button>
        </div>
      </form>
    </div>
  );
};
