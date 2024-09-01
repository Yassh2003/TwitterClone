import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

function Tweet() {
  return (
    <div className='border-b border-gray-200'>
      <div>
        <div className='flex p-4'>
          <Avatar googleId="118096717852922241760" size="40" round={true} />
          <div className='ml-2 w-full'>
            <div className='flex items-center'>
              <h1 className='font-bold'>Yash</h1>
              <p className='text-gray-500 text-sm ml-2'>@yashmernstack . 1m</p>  
            </div>
            <div>
              <p>Hello developers lets connect and grow together.</p>
            </div>
            <div className='flex justify-between my-3'>
              <div className='flex items-center'>
                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                  <FaRegComments size="20px"/>
                </div>
                <p>0</p>
              </div>
              <div className='flex items-center'>
                <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                  <FaRegHeart size="17px"/>
                </div>
                <p>0</p>
              </div>
              <div className='flex items-center'>
                <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                  <FaRegBookmark size="17px"/>
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet