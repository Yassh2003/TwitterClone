import React from 'react'
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar'

function RightSidebar() {
  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <IoSearch size="20px" />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Yash</h1>
              <p>@yashmernstack</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Yash</h1>
              <p>@yashmernstack</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Yash</h1>
              <p>@yashmernstack</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar