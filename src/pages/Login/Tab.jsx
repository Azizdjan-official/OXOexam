import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button';
import { useRegister } from './service/mutation/useRegister';
import { saveState } from '../../storage/storage';
import { useLogin } from './service/mutation/useLogin';
import { useNavigate } from 'react-router-dom';



const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { register, handleSubmit } = useForm();
  const { mutate } = useRegister();
  const { mutate:mutatelogin } = useLogin();
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data)
        navigate("/success-registration")
        reset();
      }
  })
  };
  const login = (data) => {
    console.log(data);
    mutatelogin(data, {
          onSuccess: (data) => {
              saveState("user", data)
              navigate("/")
              reset();
          }
      })
  }

  return (
    <div className="max-w-md mx-auto border my-8 bg-white ">
      <div className="flex items-center justify-center border-b  border-gray-300">
        <button
          className={` py-4 px-12 ${activeTab === 'login' ? 'border-b-4 border-black' : 'bg-white'}`}
          onClick={() => handleTabChange('login')}
        >
          Kirish
        </button>
        <button
          className={`py-4 px-12 ${activeTab === 'register' ? 'border-b-4 border-black' : 'bg-white'}`}
          onClick={() => handleTabChange('register')}
        >
          Ro’yxatdan o’tish
        </button>
      </div>
      <div className="p-6">
        {activeTab === 'login' && (
          <div>
            <form onSubmit={handleSubmit(login)}>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-md  font-medium text-gray-300">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: true })}
                  className={`mt-1 px-4 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm `}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-md font-medium text-gray-300">Password</label>
                <input
                  id="password"
                  type="password"
                  {...register('password', { required: true })}
                  className={`mt-1 py-3 px-4 block w-full rounded-md border border-gray-300 shadow-sm  sm:text-sm`}
                />
              </div>
              <Button type="submit" variant="black" className="w-full py-3 rounded-xl text-lg">Kirish</Button>
            </form>
          </div>
        )}
        {activeTab === 'register' && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1">
                <label htmlFor="name" className="block text-md font-medium text-gray-300">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: true })}
                  className={` px-4 block w-full rounded-md py-2 border border-gray-300 shadow-sm sm:text-sm`}
                />
              </div>
              <div className="mb-4">
                  <label htmlFor="email" className="block text-md font-medium  text-gray-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                    className={` px-4 block w-full rounded-md border py-2 border-gray-300 shadow-sm  sm:text-sm `}
                  />
              </div>
              <div className="mb-4">
                  <label htmlFor="password" className="block text-md font-medium  text-gray-300">Password</label>
                  <input
                    id="password"
                    type="password"
                    {...register('password', { required: true })}
                    className={` px-4 block w-full rounded-md border py-2 border-gray-300 shadow-sm  sm:text-sm `}
                  />
              </div>
              <Button type="submit" variant="black" className="w-full py-2 rounded-xl text-lg">Ro’yxatdan o’tish</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;