import { Disclosure } from '@headlessui/react'
import Button from '../UI/Button'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'   

export default function Profileaccordion() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full  bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between bg-white px-2 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className='text-lg'>Parolni o’zgartirish</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2  text-sm text-gray-500">
                <div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-500'>Amaldagi parolingiz</p>
                        <input type="passord" className='w-full border px-4 py-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-500'>Yangi parol</p>
                        <input type="passord" className='w-full border px-4 py-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-500'>Yangi parolni takrorlash</p>
                        <input type="passord" className='w-full border px-4 py-2 rounded-md' />
                    </div>
                    <p className='text-md my-2 text-gray-500'>Parol minimum 6 belgidan tashkil topishi kerak. Parol ishonchli bo’lishi uchun katta, kichik harflar, raqamlar va maxsus belgilardan iborat bo’lishi kerak</p>
                    <div className='w-full flex justify-end'>
                        <Button variant="black" className="w-[30%] font-bold rounded-md py-2">Saqlash</Button>
                    </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
