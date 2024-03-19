import { Disclosure } from '@headlessui/react'
import Button from '../UI/Button'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'   

export default function Interfeysaccordion() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full  bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between bg-white px-2 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className='text-lg'>Interfeys ranglarini o’zgartirish</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2  text-sm text-gray-500">
                <div>
                    <h1 className='text-black text-lg'>Asosiy ranglar</h1>
                    <div className='flex flex-wrap justify-evenly'>
                        <div className='bg-black rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#E46F69] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#E68E66] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#F0C44A] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#6E52EA] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#4261EF] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#88B04B] rounded-md h-[90px] w-[90px]'></div>
                        <div className='bg-[#53B0AE] rounded-md h-[90px] w-[90px]'></div>
                    </div>
                    <Button variant='black' className='rounded-md my-4 px-4 py-2'>Rangni saqlash</Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
