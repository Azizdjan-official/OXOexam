import React from 'react'
import Button from './../../components/UI/Button';
import SearchIcon from './../../icons/SearchIcon';
import Locationicon from './../../icons/Locationicon';
import { useGetCategories } from './service/query/useGetCategories';
import { useGetAllData } from './service/query/useGetAllData';
import SingleCard from '../../components/Card/SingleCard';
import EachCategory from '../../components/Card/EachCategory';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const { inView,ref}= useInView();
  const {data} = useGetCategories()
  const [searchTerm, setSearchTerm] = useState('');
  const {data:alldata, fetchNextPage, hasNextPage} = useGetAllData(searchTerm);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  }
  React.useEffect(()=>{
    if(inView && hasNextPage){
        fetchNextPage()
    }
},[inView])

  return (
    <div>
      <div className='bg-[#F6F6F6] flex justify-center py-5'>
        <form onSubmit={handleSubmit} className='flex items-center bg-white  border w-[30%]'>
                          <input  placeholder={`${alldata?.pages[0].length} natijalar boyicha qidiruv`} className=' flex items-center bg-white px-4  w-full h-full  placeholder:text-gray border  outline-none  '
                              type="search" value={searchTerm}  onChange={handleSearchChange}
                          />
                        
        </form>
         <span className='flex items-center bg-white px-2 border w-[30%]'><Locationicon/><input className='py-3 px-4 w-full outline-none' type="text" placeholder='Butun O‘zbekiston' /></span>
        <Button variant="black" className="px-12  ml-11 rounded-[8px]">Izlash</Button>
      </div>
        <h1 className='text-[#222222] w-[80%] mx-auto font-[700] text-2xl my-8'>Kategoriyalar</h1>
      <div className='grid grid-cols-9 my-12 w-[80%] mx-auto'>
        {data?.map((item)=> <EachCategory key={item.id} {...item}/>)}
      </div>
        <div className='w-[80%] mx-auto grid grid-cols-5 gap-2'>
          {alldata?.pages[0].map((singlecard)=> <SingleCard key={singlecard.id} {...singlecard}/>)}
        </div>
        <div className='flex justify-center'>
        {hasNextPage && < div ref={ref}>{inView ? <div className='my-20'><Spinner animation="border" variant="primary" /></div>: ""}</div>}
      </div>
    </div>
  )
}

export default Home


