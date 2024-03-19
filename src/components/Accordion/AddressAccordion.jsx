import { Disclosure } from '@headlessui/react'


export default function Addressaccordion() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full  bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between bg-white px-2 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className='text-lg'>Joylashuv</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2  text-sm text-gray-500">
                <div>
                    <h1 className='text-gray-500 text-lg '>Joylashuv</h1>
                    <select className='w-[20%] py-2'>
                        <option value="">Andijon Viloyati</option>
                        <option value="">Buxoro Viloyati</option>
                        <option value="">Jizzah Viloyati</option>
                        <option value="">Qoraqalpogiston Viloyati</option>
                        <option value="">Qashqadaryo Viloyati</option>
                        <option value="">Navoi Viloyati</option>
                        <option value="">Namangan Viloyati</option>
                        <option value="">Samarqand Viloyati</option>
                    </select>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
