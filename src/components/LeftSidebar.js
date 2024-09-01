import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div>
      <div>
        <div>
          <img className='ml-5' width={"24px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAce1i99AMQmiCUhhvTEYcEydjTUydOf9FA&s' alt='logo'></img>
        </div>
        <div className='my-4'>
          <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <IoMdHome size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <FaSearch size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <IoNotifications  size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
          </div>
          <Link to='/profile' className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <IoMdPerson size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <FaBookmark size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <div>
              <IoLogOut size={"24px"} />
            </div>
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
          </div>
          <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar