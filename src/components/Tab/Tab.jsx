import React, { useState } from 'react';
import Button from '../UI/Button';
import InsideTab from './InsideTab';
import ToogleBtn from './../ToggleButton/ToggleButton';
import Profileaccordion from './../Accordion/ProfileAccordion';
import Interfeysaccordion from './../Accordion/InterfeysAccordion';
import Socialaccordion from './../Accordion/SocialAccordion';
import Addressaccordion from './../Accordion/AddressAccordion';


const Tab = ({ activeTab, setActiveTab, tabName }) => {
  const isActive = activeTab === tabName;

  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => setActiveTab(tabName)}
    >
      {tabName}
    </div>
  );
};

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('E’lonlar');

  return (
    <div className="tab-container">
      <div className='flex  justify-evenly p-3'>
      <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="E’lonlar" /></Button>
      <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Xabarlar" /></Button>
      <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="To’lovlar tarixi" /></Button>
      <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Sozlamalar" /></Button>
      <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Promokod" /></Button>
      </div>

      {activeTab === 'E’lonlar' && (
        <div className="mt-4 bg-gray-200">
          <InsideTab/>
        </div>
      )}
      {activeTab === 'Xabarlar' && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Xabarlar Tab</h2>
          <p>This is the content for the Xabarlar tab.</p>
        </div>
      )}
      {activeTab === 'To’lovlar tarixi' && (
        <div className="mt-4">
          <div className='flex flex-col gap-3 w-[80%] mx-auto py-8'>
          <h1 className='text-black text-xl'>To'lovlar</h1>
            <div className='rounded-md border bg-white flex items-center py-2 px-4 justify-between w-[50%]'>
                <h1 className='text-black font-[600] text-lg m-0'>Reklama</h1>
                <p  className='text-gray-400 font-[400] text-sm m-0'>22.03.2022</p>
                <p className='text-[#EA3838] font-[700] text-md m-0'>5 200 uzs</p>
            </div>
            <div className='rounded-md border bg-white flex items-center py-2 px-4 justify-between w-[50%]'>
                <h1 className='text-black font-[600] text-lg m-0'>Qo'shimcha xizmatlar</h1>
                <p  className='text-gray-400 font-[400] text-sm m-0'>22.03.2022</p>
                <p className='text-[#EA3838] font-[700] text-md m-0'>14 754 uzs</p>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'Sozlamalar' && (
        <div className="bg-gray-400 p-3">
          <div className='w-[70%] mx-auto flex flex-col gap-3  '>
                <div className='w-full flex shadow-md bg-white items-center border justify-between'>
                    <p className='m-0 py-2 text-lg px-2 text-black'>Tungi rejim</p>
                    <div><ToogleBtn/></div>
                </div>
                <div className='w-full flex flex-col gap-2 shadow-md  justify-between'>
                    <div className='border'><Profileaccordion/></div>
                    <div className='border'><Interfeysaccordion/></div>
                    <div className='border'><Socialaccordion/></div>
                    <div className='border'><Addressaccordion/></div>
                </div>
          </div>
        </div>
      )}
      {activeTab === 'Promokod' && (
        <div className="mt-4 p-3 w-[80%] mx-auto">
          <span className='flex gap-3'>
            <p>Cashback</p>
            <p>Kupon</p>
          </span>
            <span className='flex gap-2 '>
                <input type="text" placeholder='Tolovlar qidiruvi' className='border px-2' />
                <Button variant='black' className='px-4 py-2 rounded-md'>Qidiruv</Button>
            </span>
        </div>
      )}
    </div>
  );
};

export default TabContainer;