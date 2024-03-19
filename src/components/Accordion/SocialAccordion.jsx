import { Disclosure } from '@headlessui/react'
import Button from '../UI/Button'
import Facebook from '../../icons/Facebook'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'   
import Pinterest from './../../icons/Pinterest';
import Dribble from './../../icons/Dribble';
import Telegramicon from './../../icons/Telegramicon';

export default function Socialaccordion() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full  bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between bg-white px-2 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className='text-lg'>Ijtimoiy tarmoqlar</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2  text-sm text-gray-500">
                <div>
                    <h1 className='text-black text-lg'>Ijtimoiy tarmoqlarni kiritish</h1>
                    <div className='flex flex-col gap-2'>
                        <span className='flex items-center pl-2 gap-2 border w-[35%] rounded-md pr-1'>
                            <Facebook/>
                            <input type="text" className='py-3 w-full outline-none' placeholder='fb.com/azizjon_tulaganov' />
                        </span>
                        <span className='flex items-center pl-2 gap-2 border w-[35%] rounded-md pr-1'>
                            <Pinterest/>
                            <input type="text" className='py-3 w-full outline-none' placeholder='pinterest.com/azizjon_tulaganov' />
                        </span>
                        <span className='flex items-center pl-2 gap-2 border w-[35%] rounded-md pr-1'>
                            <Dribble/>
                            <input type="text" className='py-3 w-full outline-none' placeholder='dribbble.com/azizjon_tulaganov' />
                        </span>
                        <span className='flex items-center pl-2 gap-2 border w-[35%] rounded-md pr-1'>
                            <Telegramicon/>
                            <input type="text" className='py-3 w-full outline-none' placeholder='t.me/azizjon_tulaganov' />
                        </span>
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
