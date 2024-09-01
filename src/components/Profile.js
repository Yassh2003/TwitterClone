import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

function Profile() {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                    <IoMdArrowBack size="24px"/>
                </Link>
                <div className='ml-2'>
                    <h1 className='font-bold text-lg'>Yash</h1>
                    <p className='text-gray-500 text-sm'>10 post</p>
                </div>
            </div>
            <img src='https://d25yuvogekh0nj.cloudfront.net/2019/08/Twitter-Banner-Size-Guide-blog-banner-1250x500.png' alt='banner'/>
            <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
                <Avatar googleId="118096717852922241760" size="120" round={true}/>
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 hover:bg-gray-200 rounded-full font-semibold border border-2 border-black'>Edit Profile</button>
            </div>
            <div className='m-4'>
                <h1 className='font-bold text-xl'>Yash</h1>
                <p>@yashmernstack</p>
            </div>
            <div className='m-4 text-sm'>
                <p>B.Tech-25 | AI & ML | Java | Frontend Developer | Solved 250+ DSA Problems on GFG.</p>
            </div>
        </div>
    </div>
  )
}

export default Profile