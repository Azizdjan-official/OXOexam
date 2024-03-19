import React, { useState } from 'react';
import Button from '../UI/Button';
import SearchIcon from '../../icons/SearchIcon';

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

const InsideTab = () => {
  const [activeTab, setActiveTab] = useState('Faol');

  return (
    <div className="tab-container">
      <div className='flex gap-4 ml-36 py-8'>
        <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Faol" /></Button>
        <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Kutayotgan" /></Button>
        <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="To'lanmagan" /></Button>
        <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Nofaol" /></Button>
        <Button className=" cursor-pointer focus:border-b-4 border-orange-500 focus:font-bold"><Tab activeTab={activeTab} setActiveTab={setActiveTab} tabName="Rad etilgan" /></Button>
      </div>

      {activeTab === 'Faol' && (
        <div className='bg-gray-200'>
            <div className="bg-gray-200 w-[80%] mx-auto  flex gap-3">
                <Button className=" bg-gray-200 px-3 rounded-sm py-2 w-[24%] border text-gray-500">Filtrni qo'shing</Button>
                <Button className="bg-white px-3 rounded-sm py-2 w-[24%] border text-gray-500 flex gap-3"><SearchIcon/> Sarlavha yoki ID</Button>
                <Button className="bg-white px-3 rounded-sm py-2 w-[24%] border text-gray-500">Istalgan Toifa</Button>
                <Button className="bg-white px-3 rounded-sm py-2 w-[24%] border text-gray-500">Qurilgan yili</Button>
            </div>
        <h1 className=' w-[80%] mx-auto text-xl my-8'>Jami e’lonlar :   0</h1>
        </div>
      )}
      {activeTab === 'Kutayotgan' && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Xabarlar Tab</h2>
          <p>This is the content for the Xabarlar tab.</p>
        </div>
      )}
      {activeTab === "To'lanmagan" && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">To’lovlar tarixi Tab</h2>
          <p>This is the content for the To’lovlar tarixi tab.</p>
        </div>
      )}
      {activeTab === 'Nofaol' && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Sozlamalar Tab</h2>
          <p>This is the content for the Sozlamalar tab.</p>
        </div>
      )}
      {activeTab === 'Rad etilgan' && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Promokod Tab</h2>
          <p>This is the content for the Promokod tab.</p>
        </div>
      )}
    </div>
  );
};

export default InsideTab;