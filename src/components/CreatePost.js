import React from 'react'
import Avatar from 'react-avatar'
import { FaRegImages } from "react-icons/fa";

function CreatePost() {
  return (
    <div className='w-[100%]'>
        <div>
        <div className='flex items-center justify-evenly border-b border-gray-300'>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
            </div>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
            </div>
        </div>
            <div>
                <div className='flex items-center p-4'>
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-xl ml-2' type='text' placeholder='What is happening?!'/>
                </div>
                <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                    <div>
                    <FaRegImages size="24px"/>
                    </div>
                    <button className='bg-[#1D9BF0] px-4 py-1 border-none rounded-full text-white text-lg text-right'>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost